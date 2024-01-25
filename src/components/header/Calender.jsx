import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../css/header.module.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className={styles.calendar}>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showPopperArrow={false}
          customInput={<img src="./images/solar_calendar.svg" alt="calendar" />}
          dateFormat="MMMM d, yyyy"
          popperPlacement="bottom-start"
        />
        <p>
          {selectedDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
      <article>
        <img src="./images/bell-icon.svg" alt="bells" />
      </article>
    </div>
  );
};

export default Calendar;
