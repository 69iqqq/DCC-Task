/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function MemeCard(props) {
  const navigate = useNavigate();
  return (
    <Card
      style={{ width: "11rem", borderRadius:"0px",margin: "-2px", backgroundColor: "#7c6f64", overflow:"hidden" }}
    >
      <Card.Img variant='top' src={props.img} style={{margin:"20px 20px 20px 0"}}/>
      <Card.Body style={{ borderRadius: "0px", margin: "-2px", backgroundColor: "#7c6f64" }}>
        <Card.Title>{props.title}</Card.Title>
        <Button
          style={{ backgroundColor: "#83a598", borderColor: "#83a598", color:"#fbf1c7"}}
          onClick={(e) => navigate(`/edit?url=${props.img}`)}
        >
          Make The Meme Your
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MemeCard;
