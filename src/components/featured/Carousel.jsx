import Slider from "react-slick";
import classes from "./Carrousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import frame1 from "../../resources/images/frame-1.jpg";
import frame3 from "../../resources/images/frame-3.jpg";
export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };
  return (
    <div
      className={classes.carrousel_wrapper}
      style={{ height: `${window.innerHeight}px` }}
    >
      <Slider {...settings}>
        <div>
          <div
            className={classes.carrousel_image}
            style={{
              background: `url(${frame1})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
     
        <div>
          <div
            className={classes.carrousel_image}
            style={{
              background: `url(${frame3})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        
      </Slider>
    </div>
  );
};
