// ===================================================================
// ==================================================================

// import React, { useState, createRef, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import ForEditing from "../components/ForEditing";
// import { exportComponentAsJPEG } from "react-component-export-image";

// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

// function Page() {
//   const downloadRef = createRef();
//   const [params] = useSearchParams();
//   const [text, setText] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   const addText = () => {
//     setText(text + 1);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         margin: "auto",
//         // backgroundColor: "#fbf1c7",
//         textAlign: "center",
//       }}
//     >
//       <h1
//         className='text-center'
//         style={{
//           color: "#f8f8f2",
//           marginTop: "40px",
//           fontFamily: "Outfit",
//           fontWeight: "bold",
//           textShadow: "2px 2px 2px #161616a3",
//         }}
//       >
//         Humour Check
//       </h1>

//       <div
//         ref={downloadRef}
//         style={{
//           position: "relative",
//           display: "inline-block",
//           marginTop: "20px",
//           maxWidth: isMobile ? "70%" : "60%",
//         }}
//       >
//         <img
//           src={params.get("url")}
//           alt='Meme Template'
//           style={{
//             maxWidth: "100%",
//             width: "100%",
//             boxShadow: "0px 3px 3px 3px #38363a1d",
//             borderRadius: "3px",
//             marginBottom: "10px",
//           }}
//         />

//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//           }}
//         >
//           {Array(text)
//             .fill(0)
//             .map((_, index) => (
//               <ForEditing key={index} style={{ position: "absolute" }} />
//             ))}
//         </div>
//       </div>

//       <div
//         style={{
//           margin: "20px auto",
//           maxWidth: "300px",
//           display: "flex",
//           gap: "140px",
//           backgroundColor: "black",
//           alignintem: "center",
//           justifyContent: "center",
//           cursor: "pointer",
//           padding: "4px 4px",
//         }}
//       >
//         <span
//           style={{
//             // backgroundColor: "#9afcb3",
//             // borderColor: "#9afcb3",
//             color: "#ffffff",
//             marginRight: "10px",
//             fontWeight: "bold",
//             // marginTop: "13px",
//           }}
//           onClick={addText}
//         >
//           <span style={{ fontSize: "18px", fontFamily: "Baskervville SC" }}>
//             {" "}
//             T{" "}
//           </span>
//         </span>
//         <span
//           style={{
//             // backgroundColor: "#d9d3e00",
//             // borderColor: "#ebdcff0",
//             color: "#ffff",
//             fontWeight: "bold",
//             // marginTop: "13px",
//           }}
//           onClick={() => exportComponentAsJPEG(downloadRef)}
//         >
//           <DownloadOutlinedIcon />
//         </span>
//       </div>

//       <p style={{ color: "#f8f8f2" }}>
//         For mobile 2finger tap on the text to edit. Pinch to resize and rotate
//         text
//         <br />
//         <span
//           style={{
//             // backgroundColor: "#ff79c6",
//             padding: "2px 5px",
//             borderRadius: "3px",
//             fontFamily: "Poppins",
//             color: "#ff79c6",
//           }}
//         >
//           Make sure that nothing overlays the image.
//         </span>
//       </p>
//     </div>
//   );
// }

// export default Page;
import React, { useState, createRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ForEditing from "../components/ForEditing";
import { exportComponentAsJPEG } from "react-component-export-image";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

function Page() {
  const downloadRef = createRef();
  const [params] = useSearchParams();
  const [text, setText] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const addText = () => {
    setText(text + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1
        className='text-center'
        style={{
          color: "#f8f8f2",
          // marginTop: "40px",
          fontFamily: "Outfit",
          fontWeight: "bold",
        }}
      >
        Humour Check
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom:"10px"
        }}
      >
        <div
          ref={downloadRef}
          style={{
            maxWidth: isMobile ? "70%" : "50%",
            position: "relative",
          }}
        >
          <img
            src={params.get("url")}
            alt='Meme Template'
            style={{
              maxWidth: "100%",
              width: "100%",
              boxShadow: "0px 3px 3px 3px #38363a1d",
              borderRadius: "3px",
              marginBottom: "10px",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "97.3%",
            }}
          >
            {Array(text)
              .fill(0)
              .map((_, index) => (
                <ForEditing key={index} style={{ position: "absolute" }} />
              ))}
          </div>
        </div>

        <div
          style={{
            maxWidth: "300px",
            marginLeft: "20px", // Space between image and buttons
            display: "flex",
            flexDirection: "column", // Align buttons vertically
            alignItems: "center", // Center horizontally
            gap: "20px", // Vertical space between buttons
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={addText}
          >
            <span
              style={{
                fontSize: "18px",
                fontFamily: "Baskervville SC",
              }}
            >
              T
            </span>
          </span>
          <span
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => exportComponentAsJPEG(downloadRef)}
          >
            <DownloadOutlinedIcon />
          </span>
        </div>
      </div>

      <p style={{ color: "#f8f8f2" }}>
        For mobile 2-finger tap on the text to edit. Pinch to resize and rotate
        text
        <br />
        <span
          style={{
            padding: "2px 5px",
            borderRadius: "3px",
            fontFamily: "Poppins",
            color: "#ff79c6",
          }}
        >
          Make sure that nothing overlays the image.
        </span>
      </p>
    </div>
  );
}

export default Page;
