import classes from "./Featured.module.css";
import { Carousel } from "./Carousel";
import { TimeUntil } from "./TimeUntil";

export const Featured = () => {
  return (
    <div className={classes.featured_container}>
      <Carousel />
      <div className={classes.artist_name}>
        <div className={classes.artist_name_wrapper}>Adedayo Victor</div>
      </div>
      <TimeUntil />
    </div>
  );
};
