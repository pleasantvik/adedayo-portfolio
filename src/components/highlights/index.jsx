import { Discount } from "./Discount";
import { Description } from "./Description";
import classes from "./Highlights.module.css";
export const Highlights = () => {
  return (
    <div className={classes.highlight_wrapper}>
      <Description />
      <Discount />
    </div>
  );
};
