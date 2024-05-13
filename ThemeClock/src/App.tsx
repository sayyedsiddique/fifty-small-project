import { useEffect, useState } from "react";
import "./App.css";

type dataNTimeType = {
  currentTime: string;
  currentDate: string;
};

function App() {
  useEffect(() => {
    const setTime = () => {
      let currentDate = new Date();

      let currentHours = currentDate.getHours();
      const currentMinutes = currentDate.getMinutes();

      // Convert 24-hour time to 12-hour time
      const ampm = currentHours >= 12 ? "PM" : "AM";
      currentHours = currentHours % 12;
      currentHours = currentHours ? currentHours : 12; // the hour '0' should be '12'
      // Output the current time
      console.log(
        "Current time is: " + `${currentHours}:${currentMinutes} ${ampm}`
      );

      const timeEl = document.querySelector(".time");

      if (timeEl) {
        timeEl.innerHTML = `${currentHours}:${currentMinutes} ${ampm}`;
      }

      // Get the current date components
      var year = currentDate.getFullYear();
      var month = currentDate.getMonth() + 1; // Note: getMonth() returns 0-based index
      var day = currentDate.getDate();
      // Output the current date
      console.log("Current date is: " + year + "-" + month + "-" + day);
    };

    setTime();

    setInterval(setTime, 1000);
  }, []);

  return (
    <div className="parent">
      <button className="toggle-btn">Dark Mode</button>

      <div className="clock-container">
        <div className="clock">
          <div className="needle hour"></div>
          <div className="needle minute"></div>
          <div className="needle second"></div>
          <div className="center-point"></div>
        </div>

        <div className="time">{/* {dateNTime?.currentTime} */}</div>
        <div className="date">
          <p>
            MONDAY, MAY <span>13</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
