import React from "react";
import urlGenerator from "./downloader";
import SingleAlbum from "./singleAlbumRender";


export default function AlbumPage() {
  // development and testing only - to be replaced with state in the future
  const albumData = {
    artist: "The Seatbelts",
    album: "Cowboy Bebop",
    description: "Cowboy Bebop is the first album created for the series, and the most easily categorized in terms of genre, as an outlet for many of the trademark bebop tracks. It begins with the show's theme song, \"Tank!\". The track \"Bad Dog No Biscuits\" opens with a cover of the Tom Waits composition \"Midtown\" before diverting in its interpretation.",
    coverArt: urlGenerator("music/cb/cover.jpg"),
    songList: [
      {
        name: 'Tank!',
        singer: "The Seatbelts",
        cover: urlGenerator("music/cb/cover.jpg"),
        musicSrc: () => {
          return Promise.resolve(urlGenerator("music/cb/01_Tank.mp3"))
        }
      },
      {
        name: 'Rush',
        singer: "The Seatbelts",
        cover: urlGenerator("music/cb/cover.jpg"),
        musicSrc: () => {
          return Promise.resolve(urlGenerator("music/cb/02_Rush.mp3"))
        }
      },
    ]
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
