import React, { useState } from "react";

function Form() {
  const [outString, setOutString] = useState("");
  const [hidden, setHidden] = useState(true);
  const [values, setValues] = useState({
    hours: "",
    timeInHours: "",
    timeInMins: "", 
    timeOfDay: "AM",
    goalHours: "40"
  });
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  function handleSubmit(event) {
    event.preventDefault();
    var tempTimeOfDay = values.timeOfDay;
    const temp = values.goalHours - values.hours;
    const timeLeft = temp * 60 + parseInt(values.timeInMins, 10);
    const outMin = timeLeft % 60;
    var outHour = parseInt(timeLeft / 60, 10) + parseInt(values.timeInHours, 10);
    while (outHour > 12){
      outHour = outHour - 12;
      if (tempTimeOfDay === "AM"){
        tempTimeOfDay = "PM"
      }else {
        tempTimeOfDay = "AM"
      }
    }
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
      </label>

      <label>
        Hours:
        <input
          className='paddingleftRight'
          name="hours"
          type="text"
          value={values.hours}
          onChange={handleInputChange}
        />
      </label>

      <label className='bottom'>
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
