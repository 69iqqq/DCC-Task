// import { useState, createRef } from "react";
// import { Button } from "react-bootstrap";
// import { useSearchParams } from "react-router-dom";
// import ForEditing from "../components/ForEditing";
// import { exportComponentAsJPEG } from "react-component-export-image";
// function Page() {
//   const downloadRef = createRef();
//   const [params] = useSearchParams();
//   const [text, setText] = useState(0);
//   const addText = () => {
//     setText(text + 1);
//   };
//   return (
//     <div style={{ margin: "auto", backgroundColor: "#fbf1c7" }}>
//       <h1
//         className='text-center'
//         style={{ color: "#504945", marginTop: "50px" }}
//       >
//         Show Your Humor By Editing The Template
//       </h1>
//       <div
//         ref={downloadRef}
//         style={{ width: "257px", margin: "auto" }}
//         className='meme mt-5 mb-5'
//       >
//         <img src={params.get("url")} width='250px' />
//         <div>
//           {Array(text)
//             .fill(0)
//             .map((e) => (
//               <ForEditing  key={e.index} />
//             ))}
//         </div>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "10px",
//           marginBottom: "50px",
//         }}
//       >
//         <Button
//           style={{
//             backgroundColor: "#458588",
//             borderColor: "#458588",
//             color: "#504945",
//           }}
//           onClick={addText}
//         >
//           Add Text
//         </Button>
//         <Button
//           style={{
//             backgroundColor: "#98971a",
//             borderColor: "#98971a",
//             color: "#504945",
//           }}
//           onClick={() => exportComponentAsJPEG(downloadRef)}
//         >
//           Download
//         </Button>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <p>
//           More than One text can be added and dragged any where in the image &{" "}
//           <span style={{ backgroundColor: "#d3869b" }}>
//             ctrl+ArrowDown for color picker
//           </span>
//         </p>
//         <span>Put the Text Only over the image & click anywhere to exit edit mode</span>
//       </div>
//     </div>
//   );
// }

// export default Page;
// import React, { useState, createRef } from "react";
// import { Button } from "react-bootstrap";
// import { useSearchParams } from "react-router-dom";
// import ForEditing from "../components/ForEditing";
// import { exportComponentAsJPEG } from "react-component-export-image";

// function Page() {
//   const downloadRef = createRef();
//   const [params] = useSearchParams();
//   const [text, setText] = useState(0);

//   const addText = () => {
//     setText(text + 1);
//   };

//   return (
//     <div
//       style={{
//         margin: "auto",
//         backgroundColor: "#fbf1c7",
//         textAlign: "center",
//       }}
//     >
//       <h1
//         className='text-center'
//         style={{ color: "#504945", marginTop: "50px" }}
//       >
//         Show Your Humor By Editing The Template
//       </h1>

//       <div
//         style={{
//           position: "relative",
//           display: "inline-block",
//           marginTop: "20px",
//         }}
//       >
//         <img
//           src={params.get("url")}
//           alt='Meme Template'
//           style={{ maxWidth: "100%" }}
//         />

//         {/* Render ForEditing components */}
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

//       <div style={{ margin: "20px auto", maxWidth: "250px" }}>
//         <Button
//           style={{
//             backgroundColor: "#458588",
//             borderColor: "#458588",
//             color: "#504945",
//             marginRight: "10px",
//           }}
//           onClick={addText}
//         >
//           Add Text
//         </Button>
//         <Button
//           style={{
//             backgroundColor: "#98971a",
//             borderColor: "#98971a",
//             color: "#504945",
//           }}
//           onClick={() => exportComponentAsJPEG(downloadRef)}
//         >
//           Download
//         </Button>
//       </div>

//       <p>
//         More than one text can be added and dragged anywhere on the image.
//         <br />
//         Use{" "}
//         <span
//           style={{
//             backgroundColor: "#d3869b",
//             padding: "2px 5px",
//             borderRadius: "3px",
//           }}
//         >
//           ctrl+ArrowDown
//         </span>{" "}
//         for the color picker.
//       </p>
//     </div>
//   );
// }

// export default Page;
// ==========================================================
// import React, { useState, createRef } from "react";
// import { Button } from "react-bootstrap";
// import { useSearchParams } from "react-router-dom";
// import ForEditing from "../components/ForEditing";
// import { exportComponentAsJPEG } from "react-component-export-image";

// function Page() {
//   const downloadRef = createRef(); 
//   const [params] = useSearchParams();
//   const [text, setText] = useState(0);

//   const addText = () => {
//     setText(text + 1);
//   };

//   return (
//     <div
//       style={{
//         margin: "auto",
//         backgroundColor: "#fbf1c7",
//         textAlign: "center",
//       }}
//     >
//       <h1
//         className='text-center'
//         style={{ color: "#504945", marginTop: "50px" }}
//       >
//         Show Your Humor By Editing The Template
//       </h1>

//       <div
//         ref={downloadRef}
//         style={{
//           position: "relative",
//           display: "inline-block",
//           marginTop: "20px",
//         }}
//       >
//         <img
//           src={params.get("url")}
//           alt='Meme Template'
//           style={{ maxWidth: "100%" }}
//         />

//         {/* ABIRRRRRR*/}
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

//       <div style={{ margin: "20px auto", maxWidth: "250px" }}>
//         <Button
//           style={{
//             backgroundColor: "#458588",
//             borderColor: "#458588",
//             color: "#504945",
//             marginRight: "10px",
//           }}
//           onClick={addText}
//         >
//           Add Text
//         </Button>
//         <Button
//           style={{
//             backgroundColor: "#98971a",
//             borderColor: "#98971a",
//             color: "#504945",
//           }}
//           onClick={() => exportComponentAsJPEG(downloadRef)}
//         >
//           Download
//         </Button>
//       </div>

//       <p>
//         More than one text can be added and dragged anywhere on the image.
//         <br />
//         <span
//           style={{
//             backgroundColor: "#d3869b",
//             padding: "2px 5px",
//             borderRadius: "3px",
//           }}
//         >
//           Make sure that nothing overlays the image because it is using useRef
//           to download <br/> the meme. If something overlays it, it will also get
//           downloaded, being overlaid.
//         </span>{" "}
//       </p>
//     </div>
//   );
// }

// export default Page;
// ===================================================================
// ==================================================================

import React, { useState, createRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ForEditing from "../components/ForEditing";
import { exportComponentAsJPEG } from "react-component-export-image";

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
        backgroundColor: "#fbf1c7",
        textAlign: "center",
      }}
    >
      <h1
        className='text-center'
        style={{
          color: "#504945",
          marginTop: "40px",
          fontFamily: "LobJosefin Sansster",
        }}
      >
        Homour Check
      </h1>

      <div
        ref={downloadRef}
        style={{
          position: "relative",
          display: "inline-block",
          marginTop: "20px",
          maxWidth: isMobile ? "90%" : "100%",
        }}
      >
        <img
          src={params.get("url")}
          alt='Meme Template'
          style={{
            maxWidth: "100%",
            width: "100%",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {Array(text)
            .fill(0)
            .map((_, index) => (
              <ForEditing key={index} style={{ position: "absolute" }} />
            ))}
        </div>
      </div>

      <div style={{ margin: "20px auto", maxWidth: "250px" }}>
        <Button
          style={{
            backgroundColor: "#458588",
            borderColor: "#458588",
            color: "#504945",
            marginRight: "10px",
          }}
          onClick={addText}
        >
          Add Text
        </Button>
        <Button
          style={{
            backgroundColor: "#98971a",
            borderColor: "#98971a",
            color: "#504945",
          }}
          onClick={() => exportComponentAsJPEG(downloadRef)}
        >
          Download
        </Button>
      </div>

      <p>
        More than one text can be added and dragged anywhere on the image.
        <br />
        <span
          style={{
            backgroundColor: "#d3869aa2",
            padding: "2px 5px",
            borderRadius: "3px",
            fontFamily: "Poppins",
          }}
        >
          Make sure that nothing overlays the image.
        </span>
      </p>
    </div>
  );
}

export default Page;
