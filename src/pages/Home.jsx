// import MemeCard from "../components/MemeCard";
// import React, { useEffect, useState } from "react";
// import { getTemplates } from "../api/memes";
// import Header from "../components/Header";

// const Home = function () {
//   const [meme, setMeme] = useState([]);
//   useEffect(() => {
//     getTemplates().then((memes) => setMeme(memes));
//   }, []);

//   return (
//     <>
//     < Header/>
//       <div style={{
//         // backgroundColor: "#5a5e77"
      
//      }}>
//       <div className='row'>
//         {meme.map((el) => (
//           <MemeCard img={el.blank} key={el.id} title={el.name} />
//         ))}
//       </div>
//     </div>
//         </>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from "react";
// import { getTemplates } from "../api/memes";
// import Header from "../components/Header";
// import MemeCard from "../components/MemeCard";

// const Home = () => {
//   const [memes, setMemes] = useState([]);
//   const [filteredMemes, setFilteredMemes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     getTemplates().then((data) => {
//       setMemes(data);
//       setFilteredMemes(data); // Initially set filtered memes to all memes
//     });
//   }, []);

//   // Function to handle search input change
//   const handleSearchChange = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     setSearchTerm(searchTerm);
//     // Filter memes based on search term
//     const filtered = memes.filter((meme) =>
//       meme.name.toLowerCase().includes(searchTerm)
//     );
//     setFilteredMemes(filtered);
//   };

//   return (
//     <>
//       <Header />
//       <div style={{ padding: "20px" }}>
//         <input
//           type='text'
//           placeholder='Search by title'
//           value={searchTerm}
//           onChange={handleSearchChange}
//           style={{
//             marginBottom: "20px",
//             padding: "10px",
//             width: "100%",
//             maxWidth: "400px", // Limit input width for better mobile display
//             boxSizing: "border-box", // Include padding in width calculation
//           }}
//         />
//         <div className='row' style={{ display: "flex", flexWrap: "wrap" }}>
//           {filteredMemes.map((meme) => (
//             <MemeCard
//               img={meme.blank}
//               key={meme.id}
//               title={meme.name}
//               style={{ flex: "1 0 45%", margin: "5px" }} // Adjust card styles for mobile layout
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
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
      setFilteredMemes(data); // Initially set filtered memes to all memes
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
