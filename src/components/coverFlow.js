import React from 'react';


export default function Coverflow() {
  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.async = true;
  //   script.src = "https://some-scripturl.js";
  //   this.div.appendChild(script);
  // }
  return (
    <>
      <div className="gallery">
        <div className="gallery-container">
          <img className="gallery-item" src={require('../album_art_test/01.jpg')} />
          <img className="gallery-item" src={require('../album_art_test/02.jpg')} />
          <img className="gallery-item" src={require('../album_art_test/03.jpg')} />
          <img className="gallery-item" src={require('../album_art_test/04.jpg')} />
          <img className="gallery-item" src={require('../album_art_test/05.jpg')} />
          <img className="gallery-item" src={require('../album_art_test/06.jpg')} />
          <img className="gallery-item" src={require('../album_art_test/07.jpg')} />
          <img className="gallery-item" src={require('../album_art_test/08.jpg')} />
          <img className="gallery-item" src={require('../album_art_test/09.jpg')} />
          <img className="gallery-item" src={require('../album_art_test/10.jpg')} />
        </div>
        <div className="gallery-controls" />
      </div>
      <script src="../carousel.js"></script>
    </>
  );
}