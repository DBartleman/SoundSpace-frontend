import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import urlGenerator from "./downloader";


// unused copyright blurb at bottom of page in footer
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

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

export default function ArtistPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          {/* below container originally had maxWidth="sm" on it, but it wrapped text too much */}
          <Container> 
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {albumData1.artist}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {albumData1.artistDescription}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Follow Artist
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Add All Albums To Favorites
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {albums.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.coverArt}
                    title={card.album}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.album}
                    </Typography>
                    <Typography>
                      {card.albumDescription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Album Page
                    </Button>
                    <Button size="small" color="primary">
                      Favorite
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Record label name?
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Record label info, perhaps?
        </Typography>
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}