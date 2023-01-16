import classes from "./Footer.module.css";
import { Fade } from "react-awesome-reveal";
export const Footer = () => {
  return (
    <footer className={classes.footer_bck_red}>
      <Fade triggerOnce delay={500}>
        <div className={classes.header_logo}>
          <div className={classes.footer_logo_venue}>Adedayo Victor</div>

          <div className={classes.footer_copyright}>
            Adedayo Victor, &copy; all rights reserved
          </div>
        </div>
      </Fade>
    </footer>
  );
};
