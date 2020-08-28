import React from 'react';
import SingleAlbum from "./singleAlbumRender";
import urlGenerator from "./downloader";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


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

const divStyle1 = {
  padding: '50px',
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function SearchResultsPage() {
  const classes = useStyles();
  const searchTerm = "cowboy bebop";

  return (
    <div style={divStyle1}>
      <Typography variant="subtitle1" gutterBottom>
        Search results for "{searchTerm}":
      </Typography>
      <Grid container spacing={3}>
        <SingleAlbum {...albumData1} />   {/* Album showcase content */}
        <SingleAlbum {...albumData2} />   {/* Album showcase content */}
        <SingleAlbum {...albumData3} />   {/* Album showcase content */}
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}
