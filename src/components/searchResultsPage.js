import React from 'react';
import SingleAlbum from "./singleAlbumRender";
import urlGenerator from "./downloader";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


// development and testing only - to be replaced with state in the future
const albumData = {
  artist: "The Seatbelts",
  album: "Cowboy Bebop",
  description: "",
  coverArt: urlGenerator("music/cb/cover.jpg"),
  songList: ""
}

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
        <SingleAlbum {...albumData} />   {/* Album showcase content */}
        <SingleAlbum {...albumData} />   {/* Album showcase content */}
        <SingleAlbum {...albumData} />   {/* Album showcase content */}
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}
