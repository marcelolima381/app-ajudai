import React from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import ShareIcon from "@material-ui/icons/Share"
import VisibilityIcon from "@material-ui/icons/Visibility"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"

const baiao = require("../../static/baiao.jpg")

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}))

function Home() {
  const items = [
    {
      title: "Dinda Marmitas",
      location: {
        state: "São Paulo",
        country: "Brasil",
      },
      description:
        "Conheça o incrível baião de dois da Dinda hoje mesmo pedindo pelo telefone (11) 4002-8922",
      image: baiao,
    },
    {
      title: "Dinda Marmitas",
      location: {
        state: "São Paulo",
        country: "Brasil",
      },
      description:
        "Conheça o incrível baião de dois da Dinda hoje mesmo pedindo pelo telefone (11) 4002-8922",
      image: baiao,
    },
    {
      title: "Dinda Marmitas",
      location: {
        state: "São Paulo",
        country: "Brasil",
      },
      description:
        "Conheça o incrível baião de dois da Dinda hoje mesmo pedindo pelo telefone (11) 4002-8922",
      image: baiao,
    },
    {
      title: "Dinda Marmitas",
      location: {
        state: "São Paulo",
        country: "Brasil",
      },
      description:
        "Conheça o incrível baião de dois da Dinda hoje mesmo pedindo pelo telefone (11) 4002-8922",
      image: baiao,
    },
  ]
  const classes = useStyles()

  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">App Ajudai</Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          margin: "20px 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar className={classes.large}>D</Avatar>
        <Typography variant="h3" style={{ margin: "0 10px" }}>
          Dinda Marmitas
        </Typography>
      </div>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ margin: "20px 0" }}
      >
        Lista de produtos
      </Typography>
      <Grid
        container
        alignItems="center"
        spacing={4}
        style={{ margin: "20px 0" }}
      >
        {items.map((item) => (
          <Grid key={item.title} item>
            <Card style={{ maxWidth: "300px" }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                title={item.title}
                subheader={`${item.location.state}, ${item.location.country}`}
              />
              <CardMedia
                style={{ height: 0, paddingTop: "56.25%" }}
                image={item.image}
                title={item.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <VisibilityIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
