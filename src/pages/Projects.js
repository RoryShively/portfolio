import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    projectDisplay: {
        textAlign: "center",
    },
    media: {
      height: 140,
    },
  });
 
const Projects = () => {
    const classes = useStyles();

    const projects = [
        {
            name: "Quadcopter Flight Controller",
            image: "https://roryshively-portfolio.s3-us-west-2.amazonaws.com/quad.jpg",
            description: "A STM32-Cortex M3 powered flight controller on a quad with a custom designed printed circuit board"
        },
        {
            name: "IOT LED Fixture",
            image: "https://roryshively-portfolio.s3-us-west-2.amazonaws.com/lightbar.jpg",
            description: "An ESP32 powered IOT led lighting fixture. This Lightbar can be connected and managed through a custom made flutter application that is flexible enough to control many different IOT devices"
        },
        {
            name: "Crypto Trading Platform",
            image: "https://roryshively-portfolio.s3-us-west-2.amazonaws.com/cryptdash.jpg",
            description: "A Crytocurrency trading platform which uses the python interpretter compiled into WASM to plot various indicators dynamically all in browser"
        },

    ]

    return (
       <div>
          <h1>Projects</h1>
           <p>Projects page body content</p>

            <div className={classes.projectDisplay}>
                {projects.map((value, index) => {
                    return (
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={value.image}
                                    title={value.name}
                                    />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {value.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {value.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })}
            </div>
       </div>
    );
}
 
export default Projects;