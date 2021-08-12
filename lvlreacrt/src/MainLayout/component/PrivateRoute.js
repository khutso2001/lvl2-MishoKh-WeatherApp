import React from "@material-ui/core";
import { Component } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/userSelector";
  export const PrivateRoute=({component:Component, ...rest})=>{
    let userData = useSelector(selectUser);

    return (
        <Route
          {...rest}
          render={(props) => {
            if (userData.isLogedIn) {
              return <Component {...props} />;
            } 
            else {
              return (
                <Redirect
                  to={{
                    pathname: "/SignIn",
                    state: {
                    from: props.location,
                    },
                  }}
                /> );
            }
          }}/>
      ); 
}
export default PrivateRoute;