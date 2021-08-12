import React, { useEffect }  from 'react';
import './App.css';
import AllContent from "./MainLayout/AllContent";
import Admin from "../src/MainLayout/Pages/adminPanel/AdminPanel";
import SignIn from "./MainLayout/Pages/SignIn";
import SignUp from "./MainLayout/Pages/register/SignUp";
import PrivateRoute from "./MainLayout/component/PrivateRoute"; 
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import ProductItems from "./MainLayout/Pages/ProductItems";
import {PRODUCTITEMS,ALLLCONTENT,ADMIN,SIGN_IN,SIGN_UP} from "./MainLayout/Routes";
import {useDispatch, useSelector} from "react-redux";
import {setUser,setToken}  from "./MainLayout/store/user/userActionCreator";
import { selectUser } from './MainLayout/store/user/userSelector';
import Api from "./MainLayout/api.js/api";
import {setLoginIn,setLogin} from "./MainLayout/store/user/userActionCreator";

const token = localStorage.getItem("token");

const App = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    isTokenAllowed();
  }, []);

  const user = useSelector(selectUser);

  const isTokenAllowed = () => {
    if (token) {
      Api.getMe(token)
        .then((json) => {
          console.log(json)
          dispatch(setLoginIn(false));
          dispatch(setLogin(true));
          dispatch(setUser(json));
        })
        .catch((err) => {
          console.log("Caught it: ", err);
        });
    } else {
      console.log("Token isn't valid");
    }
  };
    
  return (
     <Router>

        <Switch>
          <Route path={PRODUCTITEMS} component={ProductItems}></Route>
          <PrivateRoute path={ADMIN} component={Admin}></PrivateRoute>
          <Route path={SIGN_IN} component ={SignIn}></Route>
          <Route path={SIGN_UP} component={SignUp}></Route>
          <Route path={ALLLCONTENT} component={AllContent}></Route>
        </Switch>
     </Router>
  )
};

export default App;

