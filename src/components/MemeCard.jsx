// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import Button from "react-bootstrap/Button";

// import { useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";

// function MemeCard(props) {
//   const navigate = useNavigate();
//   return (
    
//       <Card
//         style={{
//           width: "13rem",
//           borderRadius: "0px",
//           margin: "-2px",
//           backgroundColor: "#7c6f64",
//           overflow: "hidden",
//         }}
//       >
//         <Card.Img
//           variant='top'
//           src={props.img}
//           style={{ margin: "20px 20px 20px 0" }}
//         />
//         {/* <Card.Body style={{ borderRadius: "0px", margin: "-2px", backgroundColor: "#7c6f64" }}>
//         <Card.Title>{props.title}</Card.Title>
//         <Button
//           style={{ backgroundColor: "#83a598", borderColor: "#83a598", color:"#fbf1c7"}}
//           onClick={(e) => navigate(`/edit?url=${props.img}`)}
//         >
//           Make The Meme Your
//         </Button>
//       </Card.Body> */}
//         <Button
//           style={{
//             backgroundColor: "#83a598",
//             borderColor: "#83a598",
//             color: "#fbf1c7",
//             marginBottom: "10px",
//           }}
//           onClick={(e) => navigate(`/edit?url=${props.img}`)}
//         >
//           Customise your meme
//         </Button>
//       </Card>
//   );
// }

// export default MemeCard;


/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import EditIcon from "@mui/icons-material/Edit";

// function MemeCard(props) {
//   const navigate = useNavigate();
//   return (
//     <Card
//       style={{
//         width: "13rem",
//         height: "18rem",
//         borderRadius: "0px",
//         border:"none",
//         margin: "-1px",
//         backgroundColor: "#7c6f64",
//         overflow: "hidden",
//         position: "relative",
//         padding: "10px",
//       }}
//     >
//       <div style={{ position: "relative", width: "100%", height: "100%" }}>
//         <Card.Img
//           variant='top'
//           src={props.img}
//           style={{
//             width: "100%",
//             height: "calc(100% - 40px)", 
//             objectFit: "cover",
//             margin: "10px 0",
//           }}
//         />
//         <p
//           style={{
//             // backgroundColor: "#83a598",
//             // borderColor: "#83a598",
//             color: "#83a598",

//             position: "absolute",
//             bottom: "10px",
//             left: "50%",
//             transform: "translateX(190%) translateY(-50%) ",
//             zIndex: 1,
            

//           }}
//           onClick={(e) => navigate(`/edit?url=${props.img}`)}
//         >
//           <EditIcon style={{fontSize:"large"}} />
//         </p>
//       </div>
//     </Card>
//   );
// }

// export default MemeCard;
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import EditIcon from "@mui/icons-material/Edit";

function MemeCard(props) {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        width: "12rem",
        height: "13rem",
        borderRadius: "10px", // Border radius for the card
        border: "none",
        margin: "6px", // Even margin around each card
        backgroundColor: "#7c6f64",
        overflow: "hidden",
        position: "relative",
        padding: "10px",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Card.Img
          variant='top'
          src={props.img}
          style={{
            width: "calc(100% - 20px)", // Account for padding
            height: "calc(100% - 20px)", // Account for padding
            objectFit: "cover",
            borderRadius: "10px", // Border radius for the image
            margin: "10px", // Even margin around the image
          }}
        />
        <p
          style={{
            color: "#83a598",
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(90%)",
            zIndex: 1,
            cursor: "pointer",
            backgroundColor: "rgba(89, 189, 172, 0.5)",
            borderRadius: "50%", 
            padding: "5px",
          }}
          onClick={(e) => navigate(`/edit?url=${props.img}`)}
        >
          <EditIcon style={{ fontSize: "24px" }} />
        </p>
      </div>
    </Card>
  );
}

export default MemeCard;
