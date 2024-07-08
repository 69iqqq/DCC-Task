// import React, { useState, useEffect, useRef, useCallback } from "react";
// import Draggable from "react-draggable";
// import { CompactPicker, GithubPicker } from "react-color";
// import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
// import FormatSizeIcon from "@mui/icons-material/FormatSize";
// import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
// import "../../src/App.css";

// function ForEditing({ style }) {
//   const [input, setInput] = useState(false);
//   const [text, setText] = useState("Click on Me to Edit");
//   const [textColor, setTextColor] = useState("#000000");
//   const [fontSize, setFontSize] = useState(50);
//   const [rotation, setRotation] = useState(0); // State for rotation
//   const [colorPickerType, setColorPickerType] = useState("github");

//   const inputRef = useRef(null);
//   const initialDistanceRef = useRef(null);
//   const initialAngleRef = useRef(null);

//   const enterEditMode = () => {
//     setInput(true);
//   };

//   const exitEditMode = () => {
//     setInput(false);
//     setText(text.replace(/\n/g, "<br>"));
//   };

//   const handleKeyDown = useCallback((e) => {
//     if (e.ctrlKey && e.keyCode === 38) {
//       inputRef.current.focus();
//     } else if (e.key === "Enter" && e.shiftKey) {
//       const { selectionStart, selectionEnd, value } = inputRef.current;
//       const newValue =
//         value.substring(0, selectionStart) +
//         "\n" +
//         value.substring(selectionEnd);

//       setText(newValue);
//       e.preventDefault();
//     }
//   }, []);

//   const handleSingleClick = () => {
//     setInput(true);
//   };

//   const handleTouchStart = () => {
//     setInput(true);
//   };

//   const handleColorChange = (color) => {
//     setTextColor(color.hex);
//   };

//   const handleFontSizeChange = (value) => {
//     setFontSize(value);
//   };

//   const handleRotationChange = (value) => {
//     setRotation(value);
//   };

//   const toggleColorPicker = () => {
//     setColorPickerType((prevType) =>
//       prevType === "compact" ? "github" : "compact"
//     );
//   };

//   const handlePinchStart = (e) => {
//     if (e.touches.length === 2) {
//       const distance = Math.sqrt(
//         (e.touches[0].clientX - e.touches[1].clientX) ** 2 +
//           (e.touches[0].clientY - e.touches[1].clientY) ** 2
//       );
//       initialDistanceRef.current = distance;
//       initialAngleRef.current = Math.atan2(
//         e.touches[0].clientY - e.touches[1].clientY,
//         e.touches[0].clientX - e.touches[1].clientX
//       );
//     }
//   };

//   const handlePinchMove = (e) => {
//     if (e.touches.length === 2) {
//       const distance = Math.sqrt(
//         (e.touches[0].clientX - e.touches[1].clientX) ** 2 +
//           (e.touches[0].clientY - e.touches[1].clientY) ** 2
//       );
//       const scale = distance / initialDistanceRef.current;

//       setFontSize((prevFontSize) =>
//         Math.min(Math.max(prevFontSize * scale, 17), 60)
//       );

//       const currentAngle = Math.atan2(
//         e.touches[0].clientY - e.touches[1].clientY,
//         e.touches[0].clientX - e.touches[1].clientX
//       );
//       const angleDiff =
//         ((currentAngle - initialAngleRef.current) * 180) / Math.PI;

//       setRotation((prevRotation) => prevRotation + angleDiff);

//       initialDistanceRef.current = distance;
//       initialAngleRef.current = currentAngle;
//     }
//   };

//   useEffect(() => {
//     if (input && inputRef.current) {
//       inputRef.current.focus();
//       inputRef.current.select();
//     }
//   }, [input]);

//   const stopPropagation = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <div onTouchStart={handlePinchStart} onTouchMove={handlePinchMove}>
//       <Draggable>
//         <div
//           style={{ cursor: "pointer" }}
//           onClick={handleSingleClick}
//           onTouchStart={handleTouchStart}
//         >
//           {input ? (
//             <div>
//               <textarea
//                 ref={inputRef}
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 onBlur={exitEditMode}
//                 onKeyDown={handleKeyDown}
//                 autoFocus
//                 onClick={(e) => e.target.select()}
//                 onTouchStart={(e) => e.target.select()}
//                 style={{
//                   border: "none",
//                   outline: "none",
//                   background: "transparent",
//                   fontSize: `${fontSize}px`,
//                   fontWeight: "bold",
//                   color: textColor,
//                   width: "300px",
//                   resize: "none",
//                   transform: `rotate(${rotation}deg)`,
//                   transformOrigin: "center",
//                 }}
//               />
//             </div>
//           ) : (
//             <h1
//               style={{
//                 color: textColor,
//                 fontSize: `${fontSize}px`,
//                 fontFamily: "Poppins",
//                 fontWeight: "600",
//                 transform: `rotate(${rotation}deg)`,
//                 transformOrigin: "center",
//                 display: "inline-block",
//               }}
//               onClick={enterEditMode}
//               onTouchStart={handleTouchStart}
//               dangerouslySetInnerHTML={{ __html: text }}
//             />
//           )}
//         </div>
//       </Draggable>
//       <div
//         style={{
//           position: "fixed",
//           bottom: "-15px",
//           right: "10px",
//           zIndex: "999",
//         }}
//         onTouchStart={stopPropagation}
//       >
//         {colorPickerType === "compact" ? (
//           <CompactPicker color={textColor} onChange={handleColorChange} />
//         ) : (
//           <GithubPicker color={textColor} onChange={handleColorChange} />
//         )}
//         <p
//           onClick={toggleColorPicker}
//           style={{
//             marginTop: "10px",
//             marginBottom: "20px",
//             backgroundColor: "#d17ebf",
//             borderRadius: "10px",
//             cursor: "pointer",
//             fontFamily: "Poppins",
//             fontWeight: "bold",
//           }}
//         >
//           <ChangeCircleOutlinedIcon />
//           Toggle Color palette
//         </p>
//       </div>
//       <div
//         style={{
//           position: "fixed",
//           bottom: "150px",
//           right: "10px",
//           zIndex: "999",
//         }}
//         onTouchStart={stopPropagation}
//       >
//         <span>
//           <FormatSizeIcon
//             style={{
//               backgroundColor: "rgba(255, 255, 255, 0.5)",
//               borderRadius: "10px",
//               padding: "5px",
//             }}
//           />
//         </span>{" "}
//         <input
//           type='range'
//           min='17'
//           max='60'
//           step='2'
//           value={fontSize}
//           onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
//           style={{
//             marginLeft: "10px",
//             backgroundColor: "#8B4513",
//             borderRadius: "5px",
//             outline: "none",
//             width: "200px",
//           }}
//         />
//       </div>
//       <div
//         style={{
//           position: "fixed",
//           bottom: "120px",
//           right: "10px",
//           zIndex: "999",
//         }}
//         onTouchStart={stopPropagation}
//       >
//         <span>
//           <ThreeSixtyIcon
//             style={{
//               backgroundColor: "rgba(255, 255, 255, 0.5)",
//               borderRadius: "10px",
//               padding: "5px",
//             }}
//           />
//         </span>
//         <input
//           type='range'
//           min='0'
//           max='360'
//           step='1'
//           value={rotation}
//           onChange={(e) => handleRotationChange(parseInt(e.target.value))}
//           style={{
//             marginLeft: "10px",
//             backgroundColor: "#8B4513",
//             borderRadius: "5px",
//             outline: "none",
//             width: "200px",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default ForEditing;
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import Draggable from "react-draggable";
// import { CompactPicker, GithubPicker } from "react-color";
// import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
// import FormatSizeIcon from "@mui/icons-material/FormatSize";
// import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
// import "../../src/App.css";

// function ForEditing({ style }) {
//   const [input, setInput] = useState(false);
//   const [text, setText] = useState("Click on Me to Edit");
//   const [textColor, setTextColor] = useState("#000000");
//   const [fontSize, setFontSize] = useState(35);
//   const [rotation, setRotation] = useState(0); // State for rotation
//   const [colorPickerType, setColorPickerType] = useState("github");

//   const inputRef = useRef(null);
//   const initialDistanceRef = useRef(null);
//   const initialAngleRef = useRef(null);

//   const enterEditMode = () => {
//     setInput(true);
//   };

//   const exitEditMode = () => {
//     setInput(false);
//     setText(text.replace(/\n/g, "<br>"));
//   };

//   const handleKeyDown = useCallback((e) => {
//     if (e.ctrlKey && e.keyCode === 38) {
//       inputRef.current.focus();
//     } else if (e.key === "Enter" && e.shiftKey) {
//       const { selectionStart, selectionEnd, value } = inputRef.current;
//       const newValue =
//         value.substring(0, selectionStart) +
//         "\n" +
//         value.substring(selectionEnd);

//       setText(newValue);
//       e.preventDefault();
//     }
//   }, []);

//   const handleSingleClick = (e) => {
//     if (e.detail === 2) { // Check for double click
//       setInput(true);
//     }
//   };

//   const handleTouchStart = (e) => {
//     if (e.touches.length === 2) {
//       setInput(true);
//     }
//   };

//   const handleColorChange = (color) => {
//     setTextColor(color.hex);
//   };

//   const handleFontSizeChange = (value) => {
//     setFontSize(value);
//   };

//   const handleRotationChange = (value) => {
//     setRotation(value);
//   };

//   const toggleColorPicker = () => {
//     setColorPickerType((prevType) =>
//       prevType === "compact" ? "github" : "compact"
//     );
//   };

//   const handlePinchStart = (e) => {
//     if (e.touches.length === 2) {
//       const distance = Math.sqrt(
//         (e.touches[0].clientX - e.touches[1].clientX) ** 2 +
//           (e.touches[0].clientY - e.touches[1].clientY) ** 2
//       );
//       initialDistanceRef.current = distance;
//       initialAngleRef.current = Math.atan2(
//         e.touches[0].clientY - e.touches[1].clientY,
//         e.touches[0].clientX - e.touches[1].clientX
//       );
//     }
//   };

//   const handlePinchMove = (e) => {
//     if (e.touches.length === 2) {
//       const distance = Math.sqrt(
//         (e.touches[0].clientX - e.touches[1].clientX) ** 2 +
//           (e.touches[0].clientY - e.touches[1].clientY) ** 2
//       );
//       const scale = distance / initialDistanceRef.current;

//       setFontSize((prevFontSize) =>
//         Math.min(Math.max(prevFontSize * scale, 17), 60)
//       );

//       const currentAngle = Math.atan2(
//         e.touches[0].clientY - e.touches[1].clientY,
//         e.touches[0].clientX - e.touches[1].clientX
//       );
//       const angleDiff =
//         ((currentAngle - initialAngleRef.current) * 180) / Math.PI;

//       setRotation((prevRotation) => prevRotation + angleDiff);

//       initialDistanceRef.current = distance;
//       initialAngleRef.current = currentAngle;
//     }
//   };

//   useEffect(() => {
//     if (input && inputRef.current) {
//       inputRef.current.focus();
//       inputRef.current.select();
//     }
//   }, [input]);

//   const stopPropagation = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <div onTouchStart={handlePinchStart} onTouchMove={handlePinchMove}>
//       <Draggable>
//         <div
//           style={{ cursor: "pointer" }}
//           onClick={handleSingleClick}
//           onTouchStart={handleTouchStart}
//         >
//           {input ? (
//             <div>
//               <textarea
//                 ref={inputRef}
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 onBlur={exitEditMode}
//                 onKeyDown={handleKeyDown}
//                 autoFocus
//                 onClick={(e) => e.target.select()}
//                 onTouchStart={(e) => e.target.select()}
//                 style={{
//                   border: "none",
//                   outline: "none",
//                   background: "transparent",
//                   fontSize: `${fontSize}px`,
//                   fontWeight: "bold",
//                   color: textColor,
//                   width: "300px",
//                   resize: "none",
//                   transform: `rotate(${rotation}deg)`,
//                   transformOrigin: "center",
//                   textAlign: "center", // Centering text in edit mode
//                 }}
//               />
//             </div>
//           ) : (
//             <h1
//               style={{
//                 color: textColor,
//                 fontSize: `${fontSize}px`,
//                 fontFamily: "Poppins",
//                 fontWeight: "600",
//                 transform: `rotate(${rotation}deg)`,
//                 transformOrigin: "center",
//                 display: "inline-block",
//               }}
//               onClick={enterEditMode}
//               onTouchStart={handleTouchStart}
//               dangerouslySetInnerHTML={{ __html: text }}
//             />
//           )}
//         </div>
//       </Draggable>
//       <div
//         style={{
//           position: "fixed",
//           bottom: "-15px",
//           right: "10px",
//           zIndex: "999",
//         }}
//         onTouchStart={stopPropagation}
//       >
//         {colorPickerType === "compact" ? (
//           <CompactPicker color={textColor} onChange={handleColorChange} />
//         ) : (
//           <GithubPicker color={textColor} onChange={handleColorChange} />
//         )}
//         <p
//           onClick={toggleColorPicker}
//           style={{
//             marginTop: "10px",
//             marginBottom: "20px",
//             backgroundColor: "#d17ebf",
//             borderRadius: "10px",
//             cursor: "pointer",
//             fontFamily: "Poppins",
//             fontWeight: "bold",
//           }}
//         >
//           <ChangeCircleOutlinedIcon />
//           Toggle Color palette
//         </p>
//       </div>
//       <div
//         style={{
//           position: "fixed",
//           bottom: "150px",
//           right: "10px",
//           zIndex: "999",
//         }}
//         onTouchStart={stopPropagation}
//       >
//         <span>
//           <FormatSizeIcon
//             style={{
//               backgroundColor: "rgba(255, 255, 255, 0.5)",
//               borderRadius: "10px",
//               padding: "5px",
//             }}
//           />
//         </span>{" "}
//         <input
//           type='range'
//           min='17'
//           max='60'
//           step='2'
//           value={fontSize}
//           onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
//           style={{
//             marginLeft: "10px",
//             backgroundColor: "#8B4513",
//             borderRadius: "5px",
//             outline: "none",
//             width: "200px",
//           }}
//         />
//       </div>
//       <div
//         style={{
//           position: "fixed",
//           bottom: "120px",
//           right: "10px",
//           zIndex: "999",
//         }}
//         onTouchStart={stopPropagation}
//       >
//         <span>
//           <ThreeSixtyIcon
//             style={{
//               backgroundColor: "rgba(255, 255, 255, 0.5)",
//               borderRadius: "10px",
//               padding: "5px",
//             }}
//           />
//         </span>
//         <input
//           type='range'
//           min='0'
//           max='360'
//           step='1'
//           value={rotation}
//           onChange={(e) => handleRotationChange(parseInt(e.target.value))}
//           style={{
//             marginLeft: "10px",
//             backgroundColor: "#8B4513",
//             borderRadius: "5px",
//             outline: "none",
//             width: "200px",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default ForEditing;

import React, { useState, useEffect, useRef, useCallback } from "react";
import Draggable from "react-draggable";
import { CompactPicker, GithubPicker } from "react-color";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import { Slider } from "@mui/material"; // Import Slider from Material-UI
import "../../src/App.css";

function ForEditing({ style }) {
  const [input, setInput] = useState(false);
  const [text, setText] = useState("Two finger Tap or Click(PC)");
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(35); // Default font size
  const [rotation, setRotation] = useState(0); // State for rotation
  const [colorPickerType, setColorPickerType] = useState("github");

  const inputRef = useRef(null);
  const initialDistanceRef = useRef(null);
  const initialAngleRef = useRef(null);

  const enterEditMode = () => {
    setInput(true);
  };

  const exitEditMode = () => {
    setInput(false);
    setText(text.replace(/\n/g, "<br>"));
  };

  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey && e.keyCode === 38) {
      inputRef.current.focus();
    } else if (e.key === "Enter" && e.shiftKey) {
      const { selectionStart, selectionEnd, value } = inputRef.current;
      const newValue =
        value.substring(0, selectionStart) +
        "\n" +
        value.substring(selectionEnd);

      setText(newValue);
      e.preventDefault();
    }
  }, []);

  const handleSingleClick = (e) => {
    if (e.detail === 2) {
      // Check for double click
      setInput(true);
    }
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      setInput(true);
    }
  };

  const handleColorChange = (color) => {
    setTextColor(color.hex);
  };

  const handleFontSizeChange = (event, value) => {
    setFontSize(value);
  };

  const handleRotationChange = (event, value) => {
    setRotation(value);
  };

  const toggleColorPicker = () => {
    setColorPickerType((prevType) =>
      prevType === "compact" ? "github" : "compact"
    );
  };

  const handlePinchStart = (e) => {
    if (e.touches.length === 2) {
      const distance = Math.sqrt(
        (e.touches[0].clientX - e.touches[1].clientX) ** 2 +
          (e.touches[0].clientY - e.touches[1].clientY) ** 2
      );
      initialDistanceRef.current = distance;
      initialAngleRef.current = Math.atan2(
        e.touches[0].clientY - e.touches[1].clientY,
        e.touches[0].clientX - e.touches[1].clientX
      );
    }
  };

  const handlePinchMove = (e) => {
    if (e.touches.length === 2) {
      const distance = Math.sqrt(
        (e.touches[0].clientX - e.touches[1].clientX) ** 2 +
          (e.touches[0].clientY - e.touches[1].clientY) ** 2
      );
      const scale = distance / initialDistanceRef.current;

      setFontSize((prevFontSize) =>
        Math.min(Math.max(prevFontSize * scale, 17), 60)
      );

      const currentAngle = Math.atan2(
        e.touches[0].clientY - e.touches[1].clientY,
        e.touches[0].clientX - e.touches[1].clientX
      );
      const angleDiff =
        ((currentAngle - initialAngleRef.current) * 180) / Math.PI;

      setRotation((prevRotation) => prevRotation + angleDiff);

      initialDistanceRef.current = distance;
      initialAngleRef.current = currentAngle;
    }
  };

  useEffect(() => {
    if (input && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [input]);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    // Adjust font size for mobile devices
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setFontSize(25);
      } else {
        setFontSize(35); // Default size for larger screens
      }
    };

    handleResize(); // Initial adjustment

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div onTouchStart={handlePinchStart} onTouchMove={handlePinchMove}>
      <Draggable>
        <div
          style={{ cursor: "pointer" }}
          onClick={handleSingleClick}
          onTouchStart={handleTouchStart}
        >
          {input ? (
            <div>
              <textarea
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onBlur={exitEditMode}
                onKeyDown={handleKeyDown}
                autoFocus
                onClick={(e) => e.target.select()}
                onTouchStart={(e) => e.target.select()}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: `${fontSize}px`,
                  fontWeight: "bold",
                  color: textColor,
                  width: "300px",
                  resize: "none",
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: "center",
                  textAlign: "center", // Centering text in edit mode
                }}
              />
            </div>
          ) : (
            <h1
              style={{
                color: textColor,
                fontSize: `${fontSize}px`,
                fontFamily: "Poppins",
                fontWeight: "600",
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "center",
                display: "inline-block",
              }}
              onClick={enterEditMode}
              onTouchStart={handleTouchStart}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
        </div>
      </Draggable>
      <div
        style={{
          position: "fixed",
          bottom: "-15px",
          right: "10px",
          zIndex: "999",
        }}
        onTouchStart={stopPropagation}
      >
        {colorPickerType === "compact" ? (
          <CompactPicker color={textColor} onChange={handleColorChange} />
        ) : (
          <GithubPicker color={textColor} onChange={handleColorChange} />
        )}
        <p
          onClick={toggleColorPicker}
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            backgroundColor: "#d17ebf",
            borderRadius: "10px",
            cursor: "pointer",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          <ChangeCircleOutlinedIcon />
          Toggle Color palette
        </p>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "150px",
          right: "10px",
          zIndex: "999",
          alignItems: "center",
          display: "flex",
          gap: "3px",
          marginBottom: "20px",
        }}
        onTouchStart={stopPropagation}
      >
        <FormatSizeIcon
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "10px",
            padding: "5px",
          }}
        />
        <Slider
          value={fontSize}
          min={5}
          max={70}
          step={2}
          onChange={handleFontSizeChange}
          style={{
            marginLeft: "10px",
            borderRadius: "5px",
            width: "200px",
          }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "120px",
          right: "10px",
          zIndex: "999",
          alignItems: "center",
          display: "flex",
          gap: "3px",
        }}
        onTouchStart={stopPropagation}
      >
        <ThreeSixtyIcon
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "10px",
            padding: "5px",
            marginBottom: "25px",
          }}
        />
        <Slider
          value={rotation}
          min={0}
          max={360}
          step={1}
          onChange={handleRotationChange}
          style={{
            marginLeft: "10px",
            borderRadius: "5px",
            width: "200px",
          }}
        />
      </div>
    </div>
  );
}

export default ForEditing;
