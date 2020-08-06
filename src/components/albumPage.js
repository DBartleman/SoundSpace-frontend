import React from "react";
import * as Vibrant from 'node-vibrant'
import urlGenerator from "./downloader";


class AlbumPage extends React.Component {
  // const url = urlGenerator("music/cb/cover.jpg");
  // getColors() {
  //   Vibrant.from(urlGenerator("music/cb/cover.jpg")).getPalette()
  //     .then((palette) => console.log(palette))
  // }
  getColors() {
    //const pal = Vibrant.from(urlGenerator("music/cb/cover.jpg")).getPalette().then((palette) => console.log(palette))
    //let v = new Vibrant(urlGenerator("music/cb/cover.jpg"))
    // let v = new Vibrant("../album_art_test/03.jpg");
    // v.getPalette((err, palette) => console.log(palette));

    //   WORKS:
    // const v = new Vibrant('../album_art_test/03.jpg');
    // console.log(v);

    Vibrant.from(urlGenerator("music/cb/cover.jpg")).getPalette(function (err, palette) { console.log(palette); });


    // const v = new Vibrant(urlGenerator("music/cb/cover.jpg"));
    // console.log(v.getPalette);
  }

  render () {
    return (
        <div>
          <script>{this.getColors()}</script>
          {/* <style>{pal}</style> */}
          {/* <script>{console.log(pal)}</script> */}
          {/* <img src={urlGenerator("music/cb/cover.jpg")} alt="Album Art" /> */}
        </div>
    );
  }
};

export default AlbumPage;