import React from "react";
import * as Vibrant from 'node-vibrant'
import urlGenerator from "./downloader";


class AlbumPage extends React.Component {
//   const url = urlGenerator("music/cb/cover.jpg");
  getColors() {
    Vibrant.from(urlGenerator("music/cb/cover.jpg")).getPalette()
      .then((palette) => console.log(palette))
  }
  // divStyle = {
  //   color: 'blue',
  //   backgroundColor: 'red',
  // };
  render () {
    return (
        <div>
          <style>{this.getColors()}</style>
          {/* <img src={urlGenerator("music/cb/cover.jpg")} alt="Album Art" /> */}
        </div>
    );
  }
};

export default AlbumPage;