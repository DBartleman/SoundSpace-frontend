import React from "react";
import * as Vibrant from 'node-vibrant'
import urlGenerator from "./downloader";


class AlbumPage extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  componentDidMount() { // after first render
    debugger;
    this.getColors(this.imageRef);
  }
  getColors(imageRef) {
    debugger;
    Vibrant.from(`${imageRef}`).getPalette(
      (err, palette) => { 
        debugger;
        return palette; 
      });
    // const v = new Vibrant(urlGenerator("music/cb/cover.jpg"));
    // console.log(v.getPalette);
  }

  render () {
    debugger;
    // this.getColors(this.imageRef);
    return (
      <div>
        <img src={urlGenerator("music/cb/cover.jpg")} ref={this.imageRef} alt="Album Art" />  
        {/* {this.getColors(this.imageRef)} */}
      </div>
    );
  }
};

export default AlbumPage;