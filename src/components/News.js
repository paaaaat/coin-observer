import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const News = ({ index }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={index}>
      <CardActionArea href={index.url} target='_blank'>
        <CardMedia
          className={classes.media}
          image={index.image.url}
          title={index.image.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {index.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {index.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default News;
