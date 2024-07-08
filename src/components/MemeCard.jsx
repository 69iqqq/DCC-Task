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
// import { useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import EditIcon from "@mui/icons-material/Edit";
// import "../App.css"

// function MemeCard(props) {
//   const navigate = useNavigate();
//   return (
//     <>
//       <Card
//         style={{
//           width: "180px ",
//           height: "14rem",
//           borderRadius: "3px",
//           border: "none",
//           margin: "6px",
//           backgroundColor: "#f5f5f5b7",
//           overflow: "hidden",
//           position: "relative",
//           padding: "10px",
//         }}
//       >
//         <div style={{ position: "relative", width: "100%", height: "100%" , margin:"auto"}}>
//           <Card.Img
//             variant='top'
//             src={props.img}
//             style={{
//               width: "calc(100% - 20px)",
//               height: "calc(100% - 20px)",
//               objectFit: "cover",
//               borderRadius: "3px",
//               margin: "10px",
//               // boxShadow: "2.5px 2.5px 2px 2px #bca6da6e",
//             }}
//           />
//           <p
//             style={{
//               // color: "#bd93f9",
//               color: "#f7f7f7",
//               position: "absolute",
//               bottom: "10px",
//               left: "50%",
//               transform: "translateX(90%)",
//               zIndex: 1, 
//               cursor: "pointer",
//               backgroundColor: "rgba(155, 153, 153, 0.76)",
//               borderRadius: "10px",
//               padding: "5px",
//               // boxShadow: "0px 3px 3px 3px #7c798086",
//             }}
//             onClick={(e) => navigate(`/edit?url=${props.img}`)}
//           >
//             <EditIcon style={{ fontSize: "24px" }} />
//           </p>
//         </div>
//       </Card>
//     </>
//   );
// }

// export default MemeCard;
// import { useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import EditIcon from "@mui/icons-material/Edit";
// import "../App.css";

// function MemeCard(props) {
//   const navigate = useNavigate();
//   return (
//     <>
//       <Card
//         style={{
//           width: "180px",
//           height: "14rem",
//           borderRadius: "3px",
//           border: "none",
//           margin: "6px",
//           backgroundColor: "#f5f5f5b7",
//           overflow: "hidden",
//           position: "relative",
//           padding: "10px",
//         }}
//       >
//         <div
//           style={{
//             position: "relative",
//             width: "100%",
//             height: "100%",
//             margin: "auto",
//           }}
//         >
//           <Card.Img
//             variant='top'
//             src={props.img}
//             style={{
//               width: "calc(100% - 20px)",
//               height: "calc(100% - 20px)",
//               objectFit: "contain",
//               borderRadius: "3px",
//               margin: "10px",
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               bottom: "10px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               zIndex: 1,
//               cursor: "pointer",
//               backgroundColor: "rgba(155, 153, 153, 0.76)",
//               borderRadius: "10px",
//               padding: "5px",
//             }}
//             onClick={() => navigate(`/edit?url=${props.img}`)}
//           >
//             <EditIcon style={{ fontSize: "24px" }} />
//           </div>
//         </div>
//       </Card>
//     </>
//   );
// }

// export default MemeCard;

// import { useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import EditIcon from "@mui/icons-material/Edit";
// import "../App.css";

// function MemeCard(props) {
//   const navigate = useNavigate();
//   return (
//     <>
//       <Card
//         className='meme-card'
//         style={{
//           borderRadius: "3px",
//           border: "none",
//           margin: "6px",
//           backgroundColor: "#f5f5f5b7",
//           overflow: "hidden",
//           position: "relative",
//           padding: "10px",
//         }}
//       >
//         <div
//           style={{
//             position: "relative",
//             width: "100%",
//             height: "100%",
//             margin: "auto",
//           }}
//         >
//           <Card.Img
//             variant='top'
//             src={props.img}
//             style={{
//               width: "calc(100% - 20px)",
//               height: "calc(100% - 20px)",
//               objectFit: "contain",
//               borderRadius: "3px",
//               margin: "10px",
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               bottom: "10px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               zIndex: 1,
//               cursor: "pointer",
//               backgroundColor: "rgba(155, 153, 153, 0.76)",
//               borderRadius: "10px",
//               padding: "5px",
//             }}
//             onClick={() => navigate(`/edit?url=${props.img}`)}
//           >
//             <EditIcon style={{ fontSize: "24px" }} />
//           </div>
//         </div>
//       </Card>
//     </>
//   );
// }

// export default MemeCard;
// import { useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import "../App.css";

// function MemeCard({ img }) {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/edit?url=${img}`);
//   };

//   return (
//     <Card
//       className='meme-card'
//       style={{
//         borderRadius: "3px",
//         border: "none",
//         margin: "6px",
//         backgroundColor: "#f5f5f5b7",
//         overflow: "hidden",
//         position: "relative",
//         padding: "10px",
//         cursor: "pointer",
//       }}
//       onClick={handleCardClick}
//     >
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "100%",
//           margin: "auto",
//         }}
//       >
//         <Card.Img
//           variant='top'
//           src={img}
//           style={{
//             width: "calc(100% - 20px)",
//             height: "calc(100% - 20px)",
//             objectFit: "contain",
//             borderRadius: "3px",
//             margin: "10px",
//           }}
//         />
//       </div>
//     </Card>
//   );
// }

// export default MemeCard;

// import { useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import "../App.css";

// function MemeCard({ img }) {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/edit?url=${img}`);
//   };

//   return (
//     <Card
//       className='meme-card'
//       style={{
//         borderRadius: "3px",
//         border: "none",
//         margin: "6px",
//         backgroundColor: "#f5f5f5b7",
//         overflow: "hidden",
//         position: "relative",
//         padding: "10px",
//         cursor: "pointer",
//         marginLeft: "10px", // Adjust margin-left here
//         marginRight: "10px", // Adjust margin-right here
//       }}
//       onClick={handleCardClick}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           margin: "auto",
//         }}
//       >
//         <Card.Img
//           variant='top'
//           src={img}
//           style={{
//             width: "calc(100% - 20px)",
//             height: "calc(100% - 20px)",
//             objectFit: "contain",
//             borderRadius: "3px",
//             margin: "10px",
//           }}
//         />
//       </div>
//     </Card>
//   );
// }

// export default MemeCard;
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../App.css";

function MemeCard({ img, description }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/edit?url=${img}`);
  };

  return (
    <Card
      className='meme-card'
      style={{
        borderRadius: "3px",
        border: "none",
        margin: "6px",
        backgroundColor: "#f5f5f5b7",
        overflow: "hidden",
        position: "relative",
        padding: "10px",
        cursor: "pointer",
        marginLeft: "10px", // Adjust margin-left here
        marginRight: "10px", // Adjust margin-right here
      }}
      onClick={handleCardClick}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
        }}
      >
        <Card.Img
          variant='top'
          src={img}
          style={{
            width: "calc(100% - 20px)",
            height: "calc(100% - 20px)",
            objectFit: "contain",
            borderRadius: "3px",
            margin: "10px",
          }}
        />
        <Card.Text style={{ marginTop: "10px" }}>{description}</Card.Text>
      </div>
    </Card>
  );
}

export default MemeCard;
