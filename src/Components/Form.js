import React, { useState } from "react";

function Form() {
  const [outString, setOutString] = useState("");
  const [hidden, setHidden] = useState(true);
  const [color, setColor] = useState('Red');
  const [lunch, setLunch] =useState(true);
  const [values, setValues] = useState({
    hours: "",
    lunchTimeHours: 0,
    lunchTimeMins: 0,
    timeInHours: "",
    timeInMins: "", 
    timeOfDay: "AM",
    goalHours: "40"
  });
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleLunch = (event)=>{
    event.preventDefault();
    setLunch(!lunch);
  }
  function handleSubmit(event) {
    event.preventDefault();
    var tempTimeOfDay = values.timeOfDay;
    const temp = values.goalHours - values.hours;
    var timeLeft = temp * 60 + parseInt(values.timeInMins, 10);
    
    if (values.lunchTimeHours){
      console.log(timeLeft)
      timeLeft = timeLeft + (values.lunchTimeHours * 60);
      console.log(timeLeft)
      console.log('hours hit')
    }
    if (values.lunchTimeMins){
      
      timeLeft = timeLeft + parseInt(values.lunchTimeMins, 10);
      console.log(timeLeft)
    }
  
    const outMin = timeLeft % 60;
    var outHour;
    if(values.timeInHours === 12){
      outHour = parseInt( timeLeft / 60, 10) + parseInt(values.timeInHours, 10) - 12;
    }
    else {
      outHour = parseInt(timeLeft / 60, 10) + parseInt(values.timeInHours, 10);
    }
    while (outHour >= 12 && values.timeInHours <= 12){
      outHour = outHour - 12;
      if (tempTimeOfDay === "AM"){
        tempTimeOfDay = "PM"
      }else {
        tempTimeOfDay = "AM"
      }
    }
    if (outHour === 0) outHour += 12;
    if (outMin < 10) {
      const result = outHour + ":0" + outMin +" "+ tempTimeOfDay;
      setOutString(result);
    } else {
      const result = outHour + ":" + outMin +" "+tempTimeOfDay;
      setOutString(result);
    }
    setHidden(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className='top'>
        Goal Hours:
        <input
          className='goalHoursInput paddingleftRight'
          name="goalHours"
          type="text"
          value={values.goalHours}
          onChange={handleInputChange}
        />
        Hours:
        <input
          className='paddingleftRight'
          name="hours"
          type="text"
          value={values.hours}
          onChange={handleInputChange}
        />
        <button 
          className='lunch'
          onClick={handleLunch}
        /> Lunch? 
      
      </label>
      
      <label hidden={lunch}>
        <div>
          <br/>
          Enter how long of a lunch break you intend to take. 
          <br/>
          Hours
          <input 
            name='lunchTimeHours'
            type='text'
            value={values.lunchTimeHours}
            onChange={handleInputChange}
          />
          Minutes
          <input 
            name='lunchTimeMins'
            type='text'
            value={values.lunchTimeMins}
            onChange={handleInputChange}
          />
           
        </div>
      </label>

      <label className='bottom' backgroundColor={color}>
        <br />
        <br />
        Time in =
        <input
          className='timeInput paddingleftRight'
          name="timeInHours"
          type="text"
          value={values.timeInHours}
          onChange={handleInputChange}
        />
        :
        <input
          className='timeInput paddingleftRight'
          name="timeInMins"
          type="text"
          value={values.timeInMins}
          onChange={handleInputChange}
        />
        <select 
          className='paddingleftRight'
          name='timeOfDay' 
          onChange={handleInputChange} 
          value={values.timeOfDay}
        >
          <option value='AM'>AM</option>
          <option value='PM'>PM</option>
        </select>
      </label>
      <input type="submit" value="Submit" />

      <div className="output" hidden={hidden}>
        <h2>Clock out Time </h2>
        <div name="outString">{outString}</div>
      </div>
    </form>
  );
}

export default Form;
