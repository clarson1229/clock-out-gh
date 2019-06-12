import React, { useState } from "react";

function Form() {
  const [outString, setOutString] = useState("");
  const [values, setValues] = useState({
    hours: "",
    timeInHours: "",
    timeInMins: ""
  });
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  function handleSubmit(event) {
    event.preventDefault();
    const temp = 40 - values.hours;
    const timeLeft = temp * 60 + parseInt(values.timeInMins, 10);
    const outMin = timeLeft % 60;
    const outHour =
      parseInt(timeLeft / 60, 10) + parseInt(values.timeInHours, 10);

    if (outMin < 10) {
      const result = outHour - 12 + ":0" + outMin + "PM";
      setOutString(result);
    } else {
      const result = outHour - 12 + ":" + outMin + "PM";
      setOutString(result);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hours:
        <input
          name="hours"
          type="text"
          value={values.hours}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <br />
        <br />
        Time in:
        <input
          name="timeInHours"
          type="text"
          value={values.timeInHours}
          onChange={handleInputChange}
        />
        :
        <input
          name="timeInMins"
          type="text"
          value={values.timeInMins}
          onChange={handleInputChange}
        />
      </label>
      <input type="submit" value="Submit" />
      <div className="output" hidden={false}>
        <h2>Clock out Time </h2>
        <div name="outString">{outString}</div>
      </div>
    </form>
  );
}

export default Form;
