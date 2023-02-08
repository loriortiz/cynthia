import React, { useState } from "react";
import data from './data/images.json';
import Modal from "./components/Modal";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';

function App() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };
  
  const handleRotationRight = () => {
    const totalLength = data.data.length;
    if(currentIndex +1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  const handleRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
    </Routes>
    </Router>
   
    <div className="wrapper">
      {data.data.map((item, index) =>(
        <div key={index} className="wrapper-images">
          <img 
            src={item.link}
            alt={item.text}
            onClick={() => handleClick(item, index)}
          />
          <p>{item.text}</p>
        </div>
      ))}
      {clickedImg && (
        <Modal 
          clickedImg={clickedImg}
          handleRotationRight={handleRotationRight}
          setCLickedImg={setClickedImg}
          handleRotationLeft={handleRotationLeft}
          />
      )}
    </div>
     </>
  );
}

export default App;
