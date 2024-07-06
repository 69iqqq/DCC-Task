// import React, { useState, useEffect, useRef } from "react";
// import Draggable from "react-draggable";
// import "../../src/App.css";

// function ForEditing() {
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
import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import "../../src/App.css";

function ForEditing() {
  const [input, setInput] = useState(false);
  const [text, setText] = useState("Click on Me to Edit");
  const inputRef = useRef(null);

  const enterEditMode = () => {
    setInput(true);
  };

  const exitEditMode = () => {
    setInput(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      exitEditMode();
    }
  };

  const handleTouchStart = () => {
    setInput(true);
  };

  useEffect(() => {
    if (input && inputRef.current) {
      inputRef.current.focus();
    }
  }, [input]);

  return (
    <Draggable>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
        }}
        onClick={enterEditMode}
        onTouchStart={handleTouchStart}
      >
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
                fontSize: "24px",
                padding: "5px",
                border: "1px solid #000",
                borderRadius: "5px",
              }}
            />
          </div>
        ) : (
          <h1 className='white-font-with-black-boundary'>{text}</h1>
        )}
      </div>
    </Draggable>
  );
}

export default ForEditing;
