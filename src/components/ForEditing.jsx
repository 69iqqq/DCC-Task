// import React, { useState, useEffect, useRef } from "react";
// import Draggable from "react-draggable";
// import "../../src/App.css";

// function ForEditing(style) {
//   const [input, setInput] = useState(false);
//   const [text, setText] = useState("Click on Me to Edit");
//   const inputRef = useRef(null);

//   const enterEditMode = () => {
//     setInput(true);
//   };

//   const exitEditMode = () => {
//     setInput(false);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       exitEditMode();
//     }
//   };

//   const handleTouchStart = () => {
//     setInput(true);
//   };

//   useEffect(() => {
//     if (input && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [input]);

//   return (
//     <Draggable>
//       <div
//         style={{ cursor: "pointer" }}
//         onClick={enterEditMode}
//         onTouchStart={handleTouchStart}
//       >
//         {input ? (
//           <div>
//             <input
//               ref={inputRef}
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               onBlur={exitEditMode}
//               onKeyDown={handleKeyDown}
//               autoFocus
//               onClick={(e) => e.target.select()}
//               onTouchStart={(e) => e.target.select()}
//               style={{ border: "none", outline: "none", background:"transparent", fontSize:"18px", fontWeight:"bold"}}
//             />
//           </div>
//         ) : (
//           <h1 className='white-font-with-black-boundary'>{text}</h1>
//         )}
//       </div>
//     </Draggable>
//   );
// }

// export default ForEditing;
import React, { useState, useEffect, useRef, useCallback } from "react";
import Draggable from "react-draggable";
import { ChromePicker } from "react-color";
import "../../src/App.css";

function ForEditing({ style }) {
  const [input, setInput] = useState(false);
  const [text, setText] = useState("Click on Me to Edit");
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(18);
  const [rotation, setRotation] = useState(0);

  const inputRef = useRef(null);

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

  const handleSingleClick = () => {
    setInput(true);
  };

  const handleTouchStart = () => {
    setInput(true);
  };

  const handleColorChange = (color) => {
    setTextColor(color.hex);
  };

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };

  const handleRotationChange = (value) => {
    setRotation(value);
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

  return (
    <div>
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
                  display:"inline-block"
              }}
              onClick={enterEditMode}
              onTouchStart={handleTouchStart}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
        </div>
      </Draggable>
      <div
        style={{ position: "fixed", bottom: "10px", right: "10px" }}
        onTouchStart={stopPropagation}
      >
        <ChromePicker color={textColor} onChange={handleColorChange} />
      </div>
      <div
        style={{ position: "fixed", bottom: "50px", right: "10px" }}
        onTouchStart={stopPropagation}
      >
        <input
          type='range'
          min='12'
          max='36'
          step='2'
          value={fontSize}
          onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
          style={{ marginLeft: "10px" }}
        />
        <input
          type='range'
          min='-180'
          max='180'
          step='1'
          value={rotation}
          onChange={(e) => handleRotationChange(parseInt(e.target.value))}
          style={{ marginLeft: "10px" }}
        />
      </div>
    </div>
  );
}

export default ForEditing;
