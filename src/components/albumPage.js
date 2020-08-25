import React from "react";
import urlGenerator from "./downloader";
import SingleAlbum from "./singleAlbumRender";


export default function AlbumPage() {
  // development and testing only - to be replaced with state in the future
  const albumData = {
    artist: "The Seatbelts",
    album: "Cowboy Bebop",
    description: "",
    coverArt: urlGenerator("music/cb/cover.jpg"),
    songList: ""
  }

  const divStyle0 = {
    zIndex: '0', 
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    filter: 'blur(8px)',
    backgroundImage: `url(${albumData.coverArt})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <>
      <div style={divStyle0} />   {/* blurred backgorund image */}
      <SingleAlbum {...albumData} />   {/* Album showcase content */}
    </>
  );
};
