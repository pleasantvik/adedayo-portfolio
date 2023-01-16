import { Fade } from "react-awesome-reveal";
import { AiFillGithub } from "react-icons/ai";
import { BsWhatsapp, BsTwitter, BsLinkedin } from "react-icons/bs";
import styles from "./contact.module.css";
export const Contact = () => {
  return (
    <Fade>
      <div className={styles.center_wrapper} style={{ marginTop: "2rem" }}>
        <h2>Interested in working with me?</h2>
        <button className={styles.me}>
          <a href="mailto:adedayo.ayoola5683@gmail.com">Lets talk</a>
        </button>
        <p>
          Do you have a project in mind and would love to bring it to live?{" "}
          <br /> Then contact me, let us work together to create something
          beautiful.
        </p>
        <h3>Contact me</h3>
        <div className={styles.icon_group}>
          <a
            href="https://github.com/pleasantvik"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2347084935346&text=Feel%20free%20to%20reach%20me%20"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>
          <a
            href="https://twitter.com/pleasantvik"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://linkedin.com/in/adedayo-ayoola-1b265a143"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </Fade>
  );
};
