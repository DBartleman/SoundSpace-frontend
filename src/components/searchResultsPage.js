import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

// TODO: EVERYTHING

const results = [1, 2, 3, 4, 5, 6, 7, 8, 9];


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

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Material-UI Grid:
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={8}>
          <Paper className={classes.paper}>Album 1, by artist 1 [link to album] [add to favorites]</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Album 2, by artist 2 [link to album] [add to favorites]</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Album 3, by artist 3 [link to album] [add to favorites]</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Album 4, by artist 4 [link to album] [add to favorites]</Paper>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
}
