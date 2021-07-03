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
        width: '100%',
        height:'400px'
    },
    media: {
        height: '250px',
    },
});

function MediaCard({ data: { title, price, img } }) {
    const classes = useStyles();

    return (
        <Card classes={{root:classes.root}}>
            <CardActionArea>

                <CardMedia
                    className={classes.media}
                    image={img}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}
export default MediaCard;