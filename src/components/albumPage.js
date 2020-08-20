import React from "react";
import urlGenerator from "./downloader";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
  const classes = useStyles();
  const divStyle = {
    padding: '50px',
    margin: '0 auto',
    backgroundImage: 'urlGenerator("music/air/cover.jpg")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <div style={divStyle}>
      <Grid container direction="column" spacing={5}>
        <Grid item xs={10}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>sample 1</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>sample 2222222222</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>sample 3</Paper>
          </Grid>
        </Grid>
        
      </Grid>
      <Grid container direction="column" spacing={5}>
        <Grid item xs={8} sm>
          <img src={urlGenerator("music/air/cover.jpg")} alt='Album art - Air' />
        </Grid>
      </Grid>
    </div>
  );
};
