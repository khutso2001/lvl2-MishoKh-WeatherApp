import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import {Link as MLink} from "@material-ui/core";
import {Link} from "react-router-dom";
import {PRODUCTITEMS} from "../Routes";
const useStyles = makeStyles({
    root: {
        width: '100%',
        height:'350px',
        boxShadow:' 0px 0px 0px -0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)',

    },
    media: {
        height: '250px',
    },
   
});


function MediaCard({ data: { title, price, img ,id } }) {
    const classes = useStyles();
   
    return (
        <MLink classes={{root:classes.root}} style={{textDecoration:'none'}} component ={Link} to={PRODUCTITEMS.replace (':id',id)}>
            <Card classes={{root:classes.root}} >
            <CardActionArea >
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
        </MLink>

 

           

        
    );
}
export default MediaCard;