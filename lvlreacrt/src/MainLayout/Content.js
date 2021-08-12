import React, { useState,useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './Content.css';
import Card from "../MainLayout/component/Cards";
import Sidebar from "./sideBar/Sidebar";
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Paginations from "./component/Pagination";
import Loader from "./Loader";
import { makeStyles } from '@material-ui/core/styles';
import Api from "./api.js/api";

const useStyles = makeStyles({
  root: {
      margin:'25px 0 25px 0',
  },
 
});



function Content() {
  const classes = useStyles();

  const [loading,setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page,setPage] = useState({
    page:1,
    total:100,
    limit:20,
})

const changePage = (p) => {
    setLoading(true);
    Api.Pages(p)
    .then((resp) => {
        setPage({
            ...page,
            page:p
        });
        setData(resp)}
        )
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false);
        })
}


  useEffect (()=>{
    setLoading(true);
   
           Api.getProductList()
           .then (resp=>setData(resp))
           .catch(err=>{
             console.log(err)
            })
            .finally(()=>{
              setLoading(false);
            })
  },[])
  return (
    <Container maxWidth="xl" >
      <Grid Container className="contentname" >
        <Grid item  sx={12}>
          <Sidebar sm={12} md={12} lg={3} xl={3}/>
        </Grid>
        <Grid  item justify='space-between' className="content_product" xs={9}  >
          <Grid item xs={12} justify='space-between' alignItems='center' className={classes.root}>
            <Grid item justify='space-between'>
              <ViewListIcon style={{ fontSize: 40 }} />
              <ViewModuleIcon style={{ fontSize: 40 }} />
            </Grid>
            <Grid item>
            <p>Label Example</p>
            </Grid>
            <Grid item>
            <Paginations  total={page.total} limit={page.limit} onChange={changePage}/>
            </Grid>
          </Grid>
          <Loader isLoading={loading}>
          {!!data.length && data.map(el => (
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className="clsnm" >
              <Card  data={el} />
            </Grid>
          ))}
          </Loader>
          <Grid item xs={12} justify='space-between' alignItems='center'  className={classes.root}>
            <Grid item justify='space-between'>
              <ViewListIcon style={{ fontSize: 40 }} />
              <ViewModuleIcon style={{ fontSize: 40 }} />
            </Grid>
            <Grid item>
            <p>Label Example</p>
            </Grid>
            <Grid item>
            <Paginations  total={page.total} limit={page.limit} onChange={changePage}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>



  )
};
export default Content;