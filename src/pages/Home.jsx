import MemeCard from "../components/MemeCard";
import React, { useEffect, useState } from "react";
import { getTemplates } from "../api/memes";

const Home = function () {
  const [meme, setMeme] = useState([]);
  useEffect(() => {
    getTemplates().then((memes) => setMeme(memes));
  }, []);

  return (
    <>
      <h1 className="text-center">Meme Generator</h1>
    <div className="row">
      {meme.map((el) => (
        <MemeCard img={el.blank} key={el.id} title={el.title} />
      ))}
    </div>
      </>
  );
};

export default Home;
