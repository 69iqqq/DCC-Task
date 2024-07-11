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
//           style={{marginBottom:"100px"}}>{props.title}</div>
//           <div
//             style={{
//               position: "absolute",
//               bottom: "1px",
//               left: "90%",
//               transform: "translateX(-50%)",
//               zIndex: 1,
//               cursor: "pointer",
//               backgroundColor: "rgba(155, 153, 153, 0.76)",
//               borderRadius: "10px",
//               padding: "1px 8px",
//             }}
//             onClick={() => navigate(`/edit?url=${props.img}`)}
//           >
//             <span>
//               {/* { props.title} */}
//               <EditIcon style={{ fontSize: "12px" }} />
//             </span>
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

// function MemeCard(props) {
//   const navigate = useNavigate();
//   return (
//     <div
//       style={{
//         display: "inline-block",
//         textAlign: "center",
//         margin: "10px",
//         width: "160px",
//       }}
//     >
//       <Card
//         style={{
//           width: "100%",
//           height: "auto",
//           borderRadius: "3px",
//           border: "none",
//           backgroundColor: "#f5f5f5b7",
//           overflow: "hidden",
//           position: "relative",
//           padding: "10px",
//           cursor: "pointer",
//         }}
//         onClick={() => navigate(`/edit?url=${props.img}`)}
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
//         </div>
//       </Card>
//       <div style={{ marginTop: "10px",fontSize:"12px" }}>{props.title}</div>
//     </div>
//   );
// }

// export default MemeCard;
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../App.css";

function MemeCard(props) {
  const navigate = useNavigate();

  
  const getWidth = () => {
    
    if (window.innerWidth < 768) {
      return "160px";
    } else {
      return "200px"; 
    }
  };

  return (
    <div
      style={{
        display: "inline-block",
        textAlign: "center",
        margin: "10px",
        width: getWidth(), 
      }}
    >
      <Card
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "3px",
          border: "none",
          backgroundColor: "#f5f5f5b7",
          overflow: "hidden",
          position: "relative",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => navigate(`/edit?url=${props.img}`)}
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
        </div>
      </Card>
      <div style={{ marginTop: "10px", fontSize: "12px" }}>{props.title}</div>
    </div>
  );
}

export default MemeCard;
