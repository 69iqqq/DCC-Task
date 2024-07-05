/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function MemeCard(props) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "16rem" , margin:'10px'}}>
      <Card.Img variant='top' src={ props.img}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button variant='primary' onClick={(e)=>navigate(`/edit?url=${props.img}`)}>Make The Meme Your</Button>
      </Card.Body>
    </Card>
  );
}

export default MemeCard;
