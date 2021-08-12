
import { Grid } from "@material-ui/core";
import MenuAppBar from "./FooterAppBar";
import { Container } from "@material-ui/core";
import './Footer.css'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        margin:'0px',
        maxWidth:'100%',
        padding:'0',
    }
});

const Footer = () => {
    const classes=useStyles();
    return (
        <Container classes={{root:classes.root}}xl={12}>
        <MenuAppBar/>
        <Grid container justify='space-around' className='black'>
            
            <Grid item direction='column' xl={3} md={3}>
                    <h5>About me</h5>
                    <p className="foot-desc mb-0">Here you can use rows and columns to organize your footer content. Lorem
                        ipsum dolor sit amet,
                        consectetur
                        adipisicing elit.
                    </p>
            </Grid>
            <Grid item direction='column' xl={2} md={2}>
                    <h5>Products</h5>

                    <ul className="footlist">
                        <li className="mb-2">
                            <a className="blacked" href="#!">MDBootstrap</a>
                        </li>
                        <li className="mb-2">
                            <a className="blacked" href="#!">MDWordPress</a>
                        </li>
                        <li className="mb-2">
                            <a className="blacked" href="#!">BrandFlow</a>
                        </li>
                        <li className="mb-2">
                            <a className="blacked" href="#!">Bootstrap Angular</a>
                        </li>
                    </ul>
            </Grid>

            <Grid item direction='column' xl={2} md={2}>
                    <h5>Useful links</h5>

                    <ul className="footlist">
                        <li>
                            <a className="blacked" href="#!">Your Account</a>
                        </li>
                        <li >
                            <a className="blacked" href="#!">Become an Affiliate</a>
                        </li>
                        <li >
                            <a className="blacked" href="#!">Shipping Rates</a>
                        </li>
                        <li >
                            <a className="blacked" href="#!">Help</a>
                        </li>
                    </ul>
            </Grid>

            <Grid item direction='column' xl={2} md={2}>
                    <h5>Contacts</h5>

                    <ul className="footlist">
                        <li ><span className="fa-li"><i className="far fa-map"></i></span>New York, Avenue Street 10
                        </li>
                        <li ><span className="fa-li"><i className="fas fa-phone-alt"></i></span>042 876 836 908</li>
                        <li ><span className="fa-li"><i className="far fa-envelope"></i></span>company@example.com</li>
                        <li><span className="fa-li"><i className="far fa-clock"></i></span>Monday - Friday: 10-17</li>
                    </ul>
            </Grid>

        </Grid>
       
            <Grid Container className="Footer-bottom">
                <Grid item>
                    <p className="Footer-bottom-p">© 2020 Copyright: MDBootstrap.com</p>
                </Grid>
            </Grid>
           
        
        </Container >
    )
}

export default Footer;