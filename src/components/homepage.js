import React from 'react';
import Navbar from "./navbar";
import CoverFlow from "./coverFlow";
import SongPlayer from "./SongPlayer";
import ArtistPage from "./artistPage";
import AlbumPage from "./albumPage";
import SearchResultsPage from "./searchResultsPage";

export default function Homepage(props) {
  const middleContent = () => {
    if (props.match.path === "/album/:id") {
      return <AlbumPage />;
    }
    if (props.match.path === "/artist/:id") {
      return <ArtistPage />;
    }
    if (props.match.path === "/search") {
      return <SearchResultsPage />;
    }
    if (props.match.path === "/") {
      return <CoverFlow />;
    }
  }
  console.log(props.match.path);
  return (
    <>
      <Navbar />
      {middleContent()}
      <SongPlayer />
    </>
  );
}
