import MemeCard from "../components/MemeCard";
import React, { useEffect, useState } from "react";
import { getTemplates } from "../api/memes";

const Home = function () {
  const [meme, setMeme] = useState([]);
  useEffect(() => {
    getTemplates().then((memes) => setMeme(memes));
  }, []);

  return (
    <div style={{ backgroundColor: "#5a5e77" }}>
      <div className='row'>
        {meme.map((el) => (
          <MemeCard img={el.blank} key={el.id} title={el.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
