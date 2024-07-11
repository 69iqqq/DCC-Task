import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import EditIcon from "@mui/icons-material/Edit";
import "../App.css";

function MemeCard(props) {
  const navigate = useNavigate();
  return (
    <>
      <Card
        style={{
          width: "180px",
          height: "14rem",
          borderRadius: "3px",
          border: "none",
          margin: "6px",
          backgroundColor: "#f5f5f5b7",
          overflow: "hidden",
          position: "relative",
          padding: "10px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            margin: "auto",
          }}
        >
          <Card.Img
            variant='top'
            src={props.img}
            style={{
              width: "calc(100% - 20px)",
              height: "calc(100% - 20px)",
              objectFit: "contain",
              borderRadius: "3px",
              margin: "10px",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "1px",
              left: "90%",
              transform: "translateX(-50%)",
              zIndex: 1,
              cursor: "pointer",
              backgroundColor: "rgba(155, 153, 153, 0.76)",
              borderRadius: "10px",
              padding: "1px 8px",
            }}
            onClick={() => navigate(`/edit?url=${props.img}`)}
          >
            <EditIcon style={{ fontSize: "12px", }} />
          </div>
        </div>
      </Card>
    </>
  );
}

export default MemeCard;

