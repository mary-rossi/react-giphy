import React, { useState } from "react";
import Button from "./components/Button";
import Giphy from "./components/Giphy";
import Header from "./components/Header";
import './App.css';

export default function App() {
  const [giphyImage, setGiphyImage] = useState({})
  
  const handleClick = async () => {
    const giphyImage = `https://dog.ceo/api/breeds/image/random`

    const response = await fetch(giphyImage)
    const data = await response.json()
    setGiphyImage(data)
  };

  return (
    <div className="App">
    <Header/>
     <Button handleClickButton={handleClick} />
     <Giphy giphyImage={giphyImage}/>
    </div>
  );
}