import { useCallback, useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import classes from "./TimeUntil.module.css";

export const TimeUntil = () => {
  const [time, setTime] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });
  const renderItems = (time, value) => (
    <div className={classes.countdown_item}>
      <div className={classes.countdown_time}>{time}</div>
      <div className={classes.countdown_tag}>{value}</div>
    </div>
  );

  const getTimeUntil = useCallback((deadline) => {
    //1. Know the event date- in the future
    const startTime = Date.parse(deadline);
    //2. Get today date
    const currentTime = Date.parse(new Date());
    //3. Subtract the current date from the future date
    const time = currentTime - startTime;

    if (time < 0) {
      console.log("Date Passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24) / 365);

      setTime({ days, hours, minutes, seconds });
    }
  }, []);
  useEffect(() => {
    setInterval(() => getTimeUntil("Jan, 01,2020, 08:00:00"), 1000);
  }, [getTimeUntil]);
  return (
    <Slide>
      <div className={classes.countdown_wrapper}>
        <div className={classes.countdown_top}>
          Time Elapsed, since I started coding
        </div>
        <div className={classes.countdown_bottom}>
          {renderItems(time.days, "Years")}
          {renderItems(time.hours, "Hr")}
          {renderItems(time.minutes, "Min")}
          {renderItems(time.seconds, "Sec")}
        </div>
      </div>
    </Slide>
  );
};
