import classes from "./Discount.module.css";
import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import slide from "../../resources/images/slide_me.jpg";
export const Discount = () => {
  const [start, setStart] = useState(0);
  // const end = 30;
  // const percentage = () => {
  //   if (start < end) {
  //     setStart((prev) => prev + 1);
  //   }
  // };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart((prev) => prev + 1);
      }, 30);
    }
  }, [start]);
  return (
    <div className={classes.center_wrapper}>
      <div className={classes.discount_wrapper}>
        <Fade
          onVisibilityChange={(inView) => {
            // console.log(inView);
            if (inView) {
              // percentage();
            }
          }}
        >
          <div className={`${classes.discount_percentage} `}>
            <img className={classes.profile} src={slide} alt="adedayo" />
          </div>
        </Fade>
        <Slide right>
          <div className={classes.discount_description}>
            <h3>Hi, I'm Adedayo Victor</h3>
            <p>
              I am a highly skilled and experienced frontend developer with
              strong background in HTML, CSS, Javascript, Typescript, Reactjs.
              I've worked on a wide range of projects. I am detailed oriented
              with a focus on creating intuitive and user friendly designs.
            </p>
            <p>
              I shine well in problem solving with great ability to troubleshoot
              and resolve issues quickly. I am a great team player with
              excellent communication skills which makes me a valuable asset to
              any development team.
            </p>
            <p>
              I am excited about the opportunity to use my skills and experience
              to create innovative and effective frontend solutions for your
              organization and or any freelance work
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};
