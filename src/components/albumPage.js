import React from "react";
import * as Vibrant from 'node-vibrant'
import urlGenerator from "./downloader";


class AlbumPage extends React.Component {
//   const url = urlGenerator("music/cb/cover.jpg");
  render () {
      Vibrant.from(urlGenerator("music/cb/cover.jpg").getPalette()
      .then((palette) => console.log(palette))
    return (
        <div>
          <style>{'body { background-color: red; }'}</style>
          <img src={urlGenerator("music/cb/cover.jpg")} alt="Album Art" />
        </div>
    );
  }
};

export default AlbumPage;