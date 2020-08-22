import React from "react";
import urlGenerator from "./downloader";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

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
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function AlbumPage() {
  const albumData = {
    artist = "The Seatbelts",
    album = "Cowboy Bebop",
    description = "",
    coverArt = urlGenerator("music/cb/cover.jpg"),
    songList = ""
  }

  const classes = useStyles();
  const divStyle2 = {
    backgroundColor: '#242424',
  };
  const divStyle3 = {
    padding: '30px',
  }
  return (
    <Box display="flex" flexDirection="row" justify="center" alignItems="stretch" style={divStyle2}>
      <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
        <Grid item sm>
          <Grid item xs>
            <Paper className={classes.paper}>Artist Name</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Album</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Add to Favorites button or something</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Extremely long description about the album to pique your interest and to provide something to read and interact with while listening</Paper>
          </Grid>
        </Grid>
      </Grid>
      {/* <Box display="flex" flexDirection="column" alignItems="center"> */}
      <Grid container direction="column" justify="center" alignItems="center" spacing={5} style={divStyle3}>
        <Grid item xs>
          <img src={albumData.coverArt} alt='Album art - Cowboy Bebop' />
        </Grid>
      </Grid>
      {/* </Box> */}
    </Box>
  );
};
