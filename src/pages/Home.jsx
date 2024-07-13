import React, { useEffect, useState } from "react";
import { getTemplates } from "../api/memes";
import Header from "../components/Header";
import MemeCard from "../components/MemeCard";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getTemplates().then((data) => {
      setMemes(data);
      setFilteredMemes(data); 
    });
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = memes.filter((meme) =>
      meme.name.toLowerCase().includes(searchTerm)
    );
    setFilteredMemes(filtered);
  };

  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <TextField
          placeholder='Search by title'
          value={searchTerm}
          onChange={handleSearchChange}
          variant='outlined'
          fullWidth
          style={{ marginBottom: "20px" }}
          InputProps={{
            endAdornment: <SearchIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />,
          }}
        />
        <div className='row' style={{ display: "flex", flexWrap: "wrap" }}>
          {filteredMemes.map((meme) => (
            <MemeCard
              img={meme.blank}
              key={meme.id}
              title={meme.name}
              style={{ flex: "1 0 45%", margin: "5px" }} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
