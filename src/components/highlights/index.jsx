import { About } from "./About";
import { Description } from "./Description";
import classes from "./Highlights.module.css";
export const Highlights = () => {
  return (
    <div className={classes.highlight_wrapper}>
      <Description />
      <About />
    </div>
  );
};
