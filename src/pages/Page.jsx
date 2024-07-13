import React, { useState, createRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ForEditing from "../components/ForEditing";
import { exportComponentAsJPEG } from "react-component-export-image";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

function Page() {
  const downloadRef = createRef();
  const [params] = useSearchParams();
  const [text, setText] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedSize, setSelectedSize] = useState("80%");

  const sizeOptions = [
    { id: "50%", label: "50%" },
    { id: "60%", label: "60%" },
    { id: "70%", label: "70%" },
    { id: "80%", label: "80%" },
    { id: "90%", label: "90%" },
    { id: "100%", label: "100%" },
    { id: "110%", label: "110%" },
    { id: "120%", label: "120%" },
  ];

  const setSize = (event) => {
    setSelectedSize(event.target.value);
  };

  const addText = () => {
    setText(text + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

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
        backgroundColor: "#17171b",
        minHeight: "200vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          padding: "10px",
          boxSizing: "border-box",
          backgroundColor: "#0f0f0fca",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "22px",
              fontFamily: "Baskervville SC",
            }}
            onClick={addText}
          >
            T
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
          <FormControl style={{ width: "80px" }}>
            <Select
              value={selectedSize}
              onChange={setSize}
              displayEmpty
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                borderRadius: "3px",
                border: "none",
                fontSize: "18px",
                height: "28px",
                width: "90px",
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              {sizeOptions.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          ref={downloadRef}
          style={{
            maxWidth: selectedSize,
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src={params.get("url")}
            alt='Meme Template'
            style={{
              maxWidth: "100%",
              width: "100%",
              boxShadow: "0px 3px 3px 3px #38363a1d",
              marginBottom: "10px",
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
      </div>
    </div>
  );
}

export default Page;
