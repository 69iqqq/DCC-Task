import { useState, createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ForEditing from "../components/ForEditing";
import { exportComponentAsJPEG } from "react-component-export-image";
function Page() {
  const downloadRef = createRef();
  const [params] = useSearchParams();
  const [text, setText] = useState(0);
  const addText = () => {
    setText(text + 1);
  };
  return (
    <div style={{ margin: "auto", backgroundColor: "#fbf1c7" }}>
      <h1
        className='text-center'
        style={{ color: "#504945", marginTop: "50px" }}
      >
        Show Your Humor By Editing The Template
      </h1>
      <div
        ref={downloadRef}
        style={{ width: "257px", margin: "auto" }}
        className='meme mt-5 mb-5'
      >
        <img src={params.get("url")} width='250px' />
        <div>
          {Array(text)
            .fill(0)
            .map((e) => (
              <ForEditing key={e.index} />
            ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "50px",
        }}
      >
        <Button
          style={{
            backgroundColor: "#458588",
            borderColor: "#458588",
            color: "#504945",
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
      <div style={{ textAlign: "center" }}>
        <p>
          More than One text can be added and dragged any where in the image &{" "}
          <span style={{ backgroundColor: "#d3869b" }}>
            ctrl+ArrowDown for color picker
          </span>
        </p>
        <span>Put the Text Only over the image & click anywhere to exit edit mode</span>
      </div>
    </div>
  );
}

export default Page;
