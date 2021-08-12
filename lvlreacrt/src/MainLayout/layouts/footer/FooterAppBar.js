import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  return (
    <Grid Container justify='space-between'>

      <AppBar position="static">
        <Toolbar>
          <Grid item xs={9}>
            <Typography variant="h6" className={classes.title}>
              Get connected with us on social networks!
            </Typography>
          </Grid>
          <Grid item xs={3} justify='space-evenly'alignItems='center'>
          <FacebookIcon />
              <TwitterIcon />
              <p>in</p>
              <InstagramIcon />
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>


  );
}
