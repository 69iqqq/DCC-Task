// import React, { useState, useEffect, useRef } from "react";
// import Draggable from "react-draggable";

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

//   useEffect(() => {
//     if (input && inputRef.current) {
//       inputRef.current.select();
//     }
//   }, [input]);

//   return (
//     <Draggable>
//       <div style={{ cursor: "pointer" }} onClick={enterEditMode}>
//         {input ? (
//           <input
//             ref={inputRef}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             onBlur={exitEditMode}
//             onKeyDown={handleKeyDown} 
//             autoFocus 
//             onClick={(e) => e.target.select()} 
//           />
//         ) : (
//           <h1>{text}</h1>
//         )}
//       </div>
//     </Draggable>
//   );
// }

// export default ForEditing;
import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

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
        style={{ cursor: "pointer" }}
        onClick={enterEditMode}
        onTouchStart={handleTouchStart}
      >
        {input ? (
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={exitEditMode}
            onKeyDown={handleKeyDown}
            autoFocus
            onClick={(e) => e.target.select()}
            onTouchStart={(e) => e.target.select()}
          />
        ) : (
          <h1>{text}</h1>
        )}
      </div>
    </Draggable>
  );
}

export default ForEditing;
