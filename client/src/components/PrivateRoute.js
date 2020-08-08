import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
    const token = localStorage.getItem("token");

    return (
        <Route {...props} render = {props => {
            if(token) {
                return <Component {...props} />;
            } else {
                alert("You must be logged in to view users.");
                return <Redirect to = "/" />;
            }
        }} />
    );
};

export default PrivateRoute;