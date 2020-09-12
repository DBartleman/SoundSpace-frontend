import React from "react";
import Button from '@material-ui/core/Button';
//import { Link } from 'react-router-dom';
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

export default function SingleAlbum(albumData) {

  const classes = useStyles();

  const divStyle1 = {
    padding: '50px',
    margin: '0 auto',
    zIndex: '1',
    position: 'relative'
  };
  const divStyle2 = {
    borderRadius: '15px',
    backgroundColor: 'rgba(24, 24, 24, 0.6)',
  };
  const divStyle3 = {
    padding: '30px',
  }
  const divStyle4 = {
    width: '100%',
  }
  return (
    <div style={divStyle1}>
      <Box display="flex" flexDirection="row" justify="center" alignItems="stretch" style={divStyle2}>
        <Grid container direction="column" justify="center" alignItems="center" spacing={5} style={divStyle3}>
          <Grid item sm={20}>
            <Grid item xs>
              <Paper className={classes.paper}>{albumData.artist}</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>{albumData.album}</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>{albumData.albumDescription}</Paper>
            </Grid>
            <Grid container display="flex" flexDirection="row" justify="space-between" alignItems="stretch" xs>
              <Button variant="contained" color="primary" href="/">
                Add to Favorites
              </Button>
              <Button variant="contained" color="primary" href="/artist/1">
                Artist
              </Button>
              <Button variant="contained" color="primary" href="/album/1">
                Album
              </Button>
              <Button variant="contained" color="primary" href="">
                Listen Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center" spacing={5} style={divStyle3}>
          <Grid item xs>
            <img src={albumData.coverArt} alt='Album art - Cowboy Bebop' style={divStyle4}/>
          </Grid>
        </Grid>
      </Box>
    </div>
    // <Box display="flex" flexDirection="row" justify="center" alignItems="stretch" style={divStyle2}>
    //   <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
    //     <Grid item sm>
    //       <Grid item xs>
    //         <Paper className={classes.paper}>Artist Name</Paper>
    //       </Grid>
    //       <Grid item xs>
    //         <Paper className={classes.paper}>Album</Paper>
    //       </Grid>
    //       <Grid item xs>
    //         <Paper className={classes.paper}>Add to Favorites button or something</Paper>
    //       </Grid>
    //       <Grid item xs>
    //         <Paper className={classes.paper}>Extremely long description about the album to pique your interest and to provide something to read and interact with while listening</Paper>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   {/* <Box display="flex" flexDirection="column" alignItems="center"> */}
    //   <Grid container direction="column" justify="center" alignItems="center" spacing={5} style={divStyle3}>
    //     <Grid item xs>
    //       <img src={albumData.coverArt} alt='Album art - Cowboy Bebop' />
    //     </Grid>
    //   </Grid>
    //   {/* </Box> */}
    // </Box>
  );
};
