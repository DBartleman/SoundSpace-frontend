import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import urlGenerator from "./downloader";

/**
 * Credit for most of this file goes to the creators of react-coverflow
 * I edited parts of this to make it an actual importable react class,
 *   as well as sanity changes like fixing the spelling of "random" and 
 *   other assets, labels and variables 
 */

// development and testing only - to be replaced with state in the future
const albumData1 = {
  artist: "The Seatbelts",
  artistDescription: "Seatbelts is a Japanese band led by composer and instrumentalist Yoko Kanno. An international ensemble comprising both a stable lineup of musicians and various collaborators, the band was assembled by Kanno in 1998 to perform the soundtrack music for the Cowboy Bebop anime series.",
  album: "Cowboy Bebop",
  albumDescription: "Cowboy Bebop is the first album created for the series, and the most easily categorized in terms of genre, as an outlet for many of the trademark bebop tracks. It begins with the show's theme song, \"Tank!\". The track \"Bad Dog No Biscuits\" opens with a cover of the Tom Waits composition \"Midtown\" before diverting in its interpretation.",
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
const albumData2 = {
  artist: "Air",
  artistDescription: "Air are a French music duo from Versailles, consisting of Nicolas Godin and Jean-Benoît Dunckel. After making several remixes for other acts in the first half of the 1990s, the duo released their first album, Moon Safari, in 1998. The album received universal acclaim and became an international success.",
  album: "Moon Safari",
  albumDescription: "Air's 1998 debut album Moon Safari is an influential masterpiece that not only started the international career of Jean-Benoît Dunckel and Nicolas Godin, but also found a loyal fanbase all over the world.",
  coverArt: urlGenerator("music/air/cover.jpg"),
  songList: []
}
const albumData3 = {
  artist: "Hey Arnold!",
  artistDescription: "James Volker Langknecht, better known as Jim Lang, is an American composer. He is known for scoring the Nickelodeon series Hey Arnold!, as well as it's feature film and television film.",
  album: "Jim Lang",
  albumDescription: "Hey Arnold! is an American animated children's television series created by Craig Bartlett that aired on Nickelodeon from October 7, 1996, to June 8, 2004. The show centers on a fourth grader named Arnold. Episodes center on his experiences navigating urban life and helping fellow classmates and townsfolk.",
  coverArt: urlGenerator("music/jim/cover.jpg"),
  songList: []
}

const albums = [albumData1, albumData2, albumData3];


class CoverFlow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }
  
  render() {
    return (
      <div>
        {/* <button onClick={this._handleClick.bind(this)}>Random</button> */}
        {/* I have no idea how the above button chooses a random coverflow element... */}
        {/* I think it refreshes the component, which already picks a random one to start as-is */}
        <Coverflow
          width={960}
          height={700}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >
          <div
            onClick={() => console.log("You have clicked the cover flow album art!")}
            // onClick should start playing the track, possibly
            // onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
            // className="coverart"
            // style={divStyle1}
          >
            
          </div>
          <img src={urlGenerator("music/air/cover.jpg")} alt='Album art - Air' />
          <img src={urlGenerator("music/cb/cover.jpg")} alt='Album art - The Seatbelts' />
          <img src={urlGenerator("music/fred/cover.jpg")} alt='Album art - Fred Hersch' />
          <img src={urlGenerator("music/greg/cover.jpg")} alt='Album art - Gregory Privat' />
          <img src={urlGenerator("music/jim/cover.jpg")} alt='Album art - Jim Lang' />
          <img src={urlGenerator("music/kat/cover.jpg")} alt='Album art - Kat Epple' />
          <img src={urlGenerator("music/max/cover.jpg")} alt='Album art - Maxis' />
          <img src={urlGenerator("music/mic/cover.jpg")} alt='Album art - Michael Naura' />
          <img src={urlGenerator("music/mod/cover.jpg")} alt='Album art - Modern Jazz Quartet' />
          <img src={urlGenerator("music/ryo/cover.jpg")} alt='Album art - Ryo Fukui' />
        </Coverflow>
      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};

export default CoverFlow;