import { useEffect, useState } from "react";
import Meme from "./Meme";

export default function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "/images/meme.png",
  });
  const [memeData, setMemeData] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((jsonData) => setMemeData(jsonData.data.memes));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("working");
    let random = Math.floor(Math.random() * memeData.length);
    setMeme((prevState) => {
      return {
        ...prevState,
        image: memeData[random].url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <form id="meme-form" onSubmit={handleSubmit}>
        <div className="form__row">
          <div className="form__group">
            <label htmlFor="top-text">Top text</label>
            <input
              type="text"
              id="top-text"
              placeholder="shut up"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="bottom-text">Bottom text</label>
            <input
              type="text"
              id="bottom-text"
              placeholder="take my money"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form__row">
          <button type="submit">
            <span>Get a new meme image 🖼</span>
          </button>
        </div>
      </form>
      <Meme data={meme} />
    </>
  );
}
