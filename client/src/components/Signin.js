import React from 'react';
import { TextField, Button } from "@material-ui/core";
import useForm from "../hooks/useForm";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';

const Signin = props => {
    const [user, handleChanges] = useForm({ username: "", password: "" });

    const postLogin = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("/auth/login", user)
            .then(res => {
                console.log(res.data);
                localStorage.setItem("token", res.data.token);
                props.history.push("/users");
            })
            .catch(err => console.log(err.response.data));
    }

    return (
        <form onSubmit = {postLogin} autoComplete = "off">
            <h1>Sign In:</h1>
            <TextField 
                id = "username"
                type = "text"
                name = "username"
                label = "Username"
                variant = "outlined"
                value = {user.username}
                onChange = {handleChanges}
                required
            />
            <br />
            <TextField 
                id = "password"
                type = "password"
                name = "password"
                label = "Password"
                variant = "outlined"
                value = {user.password}
                onChange = {handleChanges}
                required
            /><br />
            <Button type = "submit" variant = "contained">Sign In</Button>
            <br />
            <Link to = "/signup">Don't have an account?</Link>
        </form>
    );
};

export default Signin;