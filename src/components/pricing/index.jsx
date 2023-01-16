import classes from "./Pricing.module.css";
import { Zoom } from "react-awesome-reveal";
import bella from "../../resources/images/bella.png";
import forkify from "../../resources/images/forkify.png";
import expenseFilter from "../../resources/images/filter.png";
import task from "../../resources/images/task.png";
import pig from "../../resources/images/pig.png";
import omnifood from "../../resources/images/omnifood.png";
import booosta from "../../resources/images/booosta.png";
import metaverse from "../../resources/images/metaverse.png";
import nexter from "../../resources/images/nexter.png";
import imdb from "../../resources/images/imdb.png";
import easybank from "../../resources/images/easybank.png";
import { AiFillSetting, AiFillGithub } from "react-icons/ai";

export const Pricing = () => {
  const fullStack = [
    {
      position: "Booosta",
      description: "A Retail Management system app for businesses.",
      linkto: "https://booosta-dev.netlify.app",
      delay: 500,
      image: booosta,
      tools: "Reactjs, React-query, Python,Django,MUI",
      git: "https://github.com/Prunedge-Dev-Team/rms-web",
    },
    {
      position: "Forkify",
      description: "A food recipe application.",
      linkto: "https://pleasantvik-forkifyjs.netlify.app/",
      delay: 500,
      image: forkify,
      tools: "HTML, CSS, JS,Express",
      git: "https://github.com/pleasantvik/forkifyjs",
    },
  ];
  const simpleLandingPage = [
    {
      description: "An AI Food Company Landing Page",
      linkto: "https://pleasantvik-omnifood.netlify.app/",
      delay: 500,
      image: omnifood,
      tools: "HTML, CSS, JS",
      git: "https://github.com/pleasantvik/omnifood",
    },
    {
      description: "Metaverse World",
      linkto: "https://metaversus-app.vercel.app/",
      delay: 0,
      image: metaverse,
      tools: "ReactJs",
    },
    {
      description: "IMDB movie app",
      linkto: "https://pleasantvik-movies.netlify.app/",
      delay: 500,
      image: imdb,
      tools: "ReactJs",
      git: "https://github.com/pleasantvik/movies",
    },
    {
      description: "Real Estate",
      linkto: "https://adedayo-nextergrid.netlify.app/",
      delay: 500,
      image: nexter,
      tools: "ReactJs",
      git: "https://github.com/pleasantvik/nexter",
    },
    {
      description: "Easy Banking",
      linkto: "https://pleasantvik-easybanking.netlify.app/",
      delay: 500,
      image: easybank,
      tools: "HTML, CSS, JS",
      git: "https://github.com/pleasantvik/easybanking",
    },

    {
      position: "Bella ",
      description: "A landing page for a food web app",
      linkto: "https://pleasantvik-bella.netlify.app/",
      delay: 500,
      image: bella,
      tools: "HTML, CSS, JS",
      git: "https://github.com/pleasantvik/bella",
    },
  ];
  const simpleAppAndGame = [
    {
      description: "An expense filter App",
      linkto: "https://pleasantvik-expense-tracker.netlify.app/",
      delay: 500,
      image: expenseFilter,
      tools: "Reactjs",
      git: "https://github.com/pleasantvik/track-expenses",
    },
    {
      description: "A todo task tracking app",
      linkto: "https://pleasanttask.netlify.app/",
      delay: 0,
      image: task,
      tools: "HTML, CSS, JS",
      git: "https://github.com/pleasantvik/mytodo",
    },
    {
      description: "Pig game",
      linkto: "https://pleasantpig.netlify.app/",
      delay: 500,
      image: pig,
      tools: "HTML, CSS, JS",
      git: "https://github.com/pleasantvik/pig-game",
    },
  ];
  const showBox = () =>
    fullStack.map((box, i) => (
      <Zoom key={i} className={classes.pricing_item} delay={box.delay}>
        <div className={classes.pricing_inner_wrapper}>
          <div className={classes.pricing_title}>
            <img
              src={box.image}
              alt={box.image}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <div className={classes.pricing_description}>{box.description}</div>
          <div className={classes.pricing_title}>{box.tools}</div>
          <div className={classes.pricing_buttons}>
            <button className={classes.link}>
              <a href={box.linkto} target="_blank" rel="noreferrer">
                View
              </a>
            </button>
            <button className={classes.link}>
              <a href={box.git} target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            </button>
          </div>
        </div>
      </Zoom>
    ));
  const landingPage = () =>
    simpleLandingPage.map((box, i) => (
      <Zoom key={i} className={classes.pricing_item} delay={box.delay}>
        <div className={classes.pricing_inner_wrapper}>
          <div className={classes.pricing_title}>
            <img
              src={box.image}
              alt={box.image}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <div className={classes.pricing_description}>{box.description}</div>
          <div className={classes.pricing_title}>{box.tools}</div>
          <div className={classes.pricing_buttons}>
            <button className={classes.link}>
              <a href={box.linkto} target="_blank" rel="noreferrer">
                View
              </a>
            </button>
            <button className={classes.link}>
              <a href={box.git} target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            </button>
          </div>
        </div>
      </Zoom>
    ));
  const appAndGame = () =>
    simpleAppAndGame.map((box, i) => (
      <Zoom key={i} className={classes.pricing_item} delay={box.delay}>
        <div className={classes.pricing_inner_wrapper}>
          <div className={classes.pricing_title}>
            <img
              src={box.image}
              alt={box.image}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <div className={classes.pricing_description}>{box.description}</div>
          <div className={classes.pricing_title}>{box.tools}</div>
          <div className={classes.pricing_buttons}>
            <button className={classes.link}>
              <a href={box.linkto} target="_blank" rel="noreferrer">
                View
              </a>
            </button>
            <button className={classes.link}>
              <a href={box.git} target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            </button>
          </div>
        </div>
      </Zoom>
    ));
  return (
    <div className={classes.pricing_wrapper}>
      <div className={`${classes.center_wrapper} ${classes.pricing_section}`}>
        <Zoom>
          <h2
            style={{
              marginBottom: "2rem",
              color: "#ffa800",
              fontSize: "3rem",
            }}
          >
            <AiFillSetting className={classes.me} /> My Projects
          </h2>
        </Zoom>

        <div className={classes.pricing_wrapper}>{showBox()}</div>
      </div>
      <div className={`${classes.center_wrapper} ${classes.pricing_section}`}>
        <Zoom>
          <h2>
            <AiFillSetting className={classes.me} /> Simple Landing Pages
          </h2>
        </Zoom>

        <div className={classes.pricing_wrapper}>{landingPage()}</div>
      </div>
      <div className={`${classes.center_wrapper} ${classes.pricing_section}`}>
        <Zoom>
          <h2>
            <AiFillSetting className={classes.me} /> Simple Apps and Games
          </h2>
        </Zoom>

        <div className={classes.pricing_wrapper}>{appAndGame()}</div>
      </div>
    </div>
  );
};
