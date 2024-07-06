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
import "../../src/App.css";

function ForEditing({ style }) {
  const [input, setInput] = useState(false);
  const [text, setText] = useState("Click on Me to Edit");
  const [textColor, setTextColor] = useState("#000000")
  const [fontSize, setFontSize] = useState(18); 

  const inputRef = useRef(null);
  const colorPickerRef = useRef(null);
  const fontSizeSliderRef = useRef(null);

  const enterEditMode = () => {
    setInput(true);
  };

  const exitEditMode = () => {
    setInput(false);
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter") {
      exitEditMode();
    } else if (e.ctrlKey && e.keyCode === 40) {
      
      colorPickerRef.current.click();
    } else if (e.ctrlKey && e.keyCode === 38) {
    
      fontSizeSliderRef.current.focus();
    }
  }, []);

  const handleSingleClick = () => {
    setInput(true); 
  };

  const handleColorChange = (color) => {
    setTextColor(color); 
    
  };

  const handleFontSizeChange = (value) => {
    setFontSize(value); 
  };

  useEffect(() => {
    if (input && inputRef.current) {
      inputRef.current.focus();
    }
  }, [input]);

  return (
    <Draggable>
      <div style={{ cursor: "pointer" }} onClick={handleSingleClick}>
        {input ? (
          <div>
            <input
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
              }}
            />
            <input
              ref={colorPickerRef}
              type='color'
              value={textColor}
              onChange={(e) => handleColorChange(e.target.value)} 
              onClick={(e) => e.stopPropagation()} 
              onTouchStart={(e) => e.stopPropagation()}
            />
            <input
              ref={fontSizeSliderRef}
              type='range'
              min='12'
              max='36'
              step='2'
              value={fontSize}
              onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
              onClick={(e) => e.stopPropagation()} 
              onTouchStart={(e) => e.stopPropagation()} 
              style={{ marginLeft: "10px" }}
            />
          </div>
        ) : (
          <h1
            style={{ color: textColor, fontSize: `${fontSize}px`, fontFamily:"Poppins", fontWeight:"600" }}
            onClick={enterEditMode}
          >
            {text}
          </h1>
        )}
      </div>
    </Draggable>
  );
}

export default ForEditing;
