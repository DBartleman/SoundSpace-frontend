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
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function AlbumPage() {
  const albumData = []

  const classes = useStyles();
  const imgURL = urlGenerator("music/cb/cover.jpg");
  const divStyle1 = {
    padding: '50px',
    margin: '0 auto',
    // filter: 'blur(8px)',
    backgroundImage: `url(${imgURL}`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  const divStyle2 = {
    backgroundColor: '#242424',
  };
  return (
    <div style={divStyle1}>
      <Box display="flex" flexDirection="row" alignItems="center" style={divStyle2}>
        {/* <Box display="flex" flexDirection="column" alignItems="center"> */}
        <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
          <Grid item xs={20}>
            <Grid item xs={8}>
              <Paper className={classes.paper}>sample 1</Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}>sample 2222222222</Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}>sample 3</Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* </Box> */}
        {/* <Box display="flex" flexDirection="column" alignItems="center"> */}
        <Grid container direction="column" justify="center" alignItems="center" spacing={5}>
            <Grid item xs={8} sm>
              <img src={urlGenerator("music/cb/cover.jpg")} alt='Album art - Air' />
            </Grid>
          </Grid>
        {/* </Box> */}
      </Box>
    </div>
  );
};
