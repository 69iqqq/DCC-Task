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
    <div style={{margin:"auto"}}>
      <h1 className='text-center'>Show You Humor By Editing The Template</h1>
      <div
        ref={downloadRef}
        style={{ width: "600px", border: "1px solid", margin: "auto" }}
        className='meme mt-5 mb-5'
      >
        <img src={params.get("url")} width='250px' />
        {Array(text)
          .fill(0)
          .map((e) => (
            <ForEditing key={e.index} />
          ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <Button onClick={addText}>Add Text</Button>
        <Button
          variant='success'
          onClick={() => exportComponentAsJPEG(downloadRef)}
        >
          Download
        </Button>
      </div>
      <div></div>
    </div>
  );
}

export default Page;
