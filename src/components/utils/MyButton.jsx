import { Button } from "@mui/material";
import TicketIcon from "../../resources/images/icons/ticket.png";
export const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contain"
      size={props.size ? props.size : "large"}
      sx={{ background: "#8e8e8e", color: "#fff", ...props.sx }}
    >
      {props.iconTicket ? (
        <img src={TicketIcon} alt="icon_button" className="iconImage" />
      ) : null}

      {props.text}
    </Button>
  );
};
