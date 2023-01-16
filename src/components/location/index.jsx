import classes from "./location.module.css";
export const Location = () => {
  return (
    <div className={classes.location_wrapper}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.170505947937!2d3.3960335613657384!3d6.452710087207307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b171e80facf%3A0x3327c8431972bd22!2sTAFAWA%20BALEWA%20SQUARE%20MANAGEMENT%20BOARD!5e0!3m2!1sen!2sng!4v1669205354763!5m2!1sen!2sng"
        frameBorder="0"
        title="gglemaps"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={classes.location_frame}
      ></iframe>

      <div className={classes.location_tag}>
        <div>Location</div>
      </div>
    </div>
  );
};
