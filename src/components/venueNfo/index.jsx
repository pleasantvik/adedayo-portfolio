import classes from "./Venue.module.css";
import { Zoom } from "react-awesome-reveal";
import { ReactComponent as Bootstrap } from "../../resources/images/icons/bootstrap-5-1.svg";
import { ReactComponent as Css } from "../../resources/images/icons/css-3.svg";
import { ReactComponent as Html } from "../../resources/images/icons/html-1.svg";
import { ReactComponent as Mui } from "../../resources/images/icons/material-ui-1.svg";
import { ReactComponent as Nodejs } from "../../resources/images/icons/nodejs-icon.svg";
import { ReactComponent as ReactIcon } from "../../resources/images/icons/react-2.svg";
import { ReactComponent as Js } from "../../resources/images/icons/logo-javascript.svg";
import { ReactComponent as Git } from "../../resources/images/icons/git-icon.svg";
import { ReactComponent as Redux } from "../../resources/images/icons/redux.svg";
import { ReactComponent as Netlify } from "../../resources/images/icons/netlify.svg";
import { ReactComponent as MongoIcon } from "../../resources/images/icons/mongodb-icon-1.svg";
import { ReactComponent as Tailwind } from "../../resources/images/icons/tailwind-css-2.svg";
import { ReactComponent as Sass } from "../../resources/images/icons/sass-1.svg";
import { ReactComponent as Github } from "../../resources/images/icons/github-icon-1.svg";
import { ReactComponent as TypeScript } from "../../resources/images/icons/typescript.svg";
import { AiFillSetting } from "react-icons/ai";
export const VenueNfo = () => {
  return (
    <div className={classes.bck_black}>
      <div className={classes.center_wrapper}>
        <h2 className={classes.h2}>
          <AiFillSetting
            className={classes.me}
            style={{
              marginRight: "2rem",
              width: ".8em",
              height: ".8em",
            }}
          />
          Technology Stack
        </h2>
        <p className={classes.p}>
          I design, develop and create website with this toolkit
        </p>
        <div className={classes.vn_wrapper}>
          <Zoom className={classes.vn_item}>
            <div className={classes.icon_group}>
              <Html className={classes.icon} />
              <Css className={classes.icon} />
              <Js className={classes.icon} />
              <Bootstrap className={classes.icon} />
              <Git className={classes.icon} />
              <Mui className={classes.icon} />
              <Nodejs className={classes.icon} />
              <ReactIcon className={classes.icon} />
              <Redux className={classes.icon} />
              <Netlify className={classes.icon} />
              <MongoIcon className={classes.icon} />
              <Tailwind className={classes.icon} />
              <Sass className={classes.icon} />
              <Github className={classes.icon} />
              <TypeScript className={classes.icon} />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};
