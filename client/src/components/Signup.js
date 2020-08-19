import React from 'react';
import { InputLabel, Select, FormControl, MenuItem, TextField, Button, makeStyles } from "@material-ui/core";
import useForm from "../hooks/useForm";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
        //margin: theme.spacing(1),
        minWidth: 220,
    },
    selectEmpty: {
        //marginTop: theme.spacing(2),
    },
}));

const Signup = props => {
    const [user, handleChanges] = useForm({ username: "", password: "", department: "" });
    const classes = useStyles();

    const postRegister = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("/auth/register", user)
            .then(res => {
                console.log({registered: res.data});
                props.history.push("/signin");
            })
            .catch(err => console.log(err.response.data));
    }

    return (
        <form onSubmit = {postRegister} autoComplete = "off">
            <h1>Sign Up:</h1>
            <TextField 
                id = "username"
                type = "text"
                name = "username"
                label = "Username"
                variant = "outlined"
                value = {user.username}
                onChange = {handleChanges}
                required
            /><br />
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

            <FormControl className={classes.formControl}  variant = "outlined">
                <InputLabel id="department-select-label">Department *</InputLabel>
                <Select
                    labelId="department-select-label"
                    label="Department *"
                    id="department-select"
                    name="department"
                    value={user.department}
                    onChange={handleChanges}
                    required
                >
                    <MenuItem value="">
                        <em>Select a department</em>
                    </MenuItem>
                    <MenuItem value="SALES">Sales</MenuItem>
                    <MenuItem value="WEB">Web</MenuItem>
                    <MenuItem value="MARKETING">Marketing</MenuItem>
                </Select>
            </FormControl><br />
            <Button type = "submit" variant = "contained">Sign Up</Button>
            <br />
            <Link to = "/signin">Already have an account?</Link>
        </form>
    );
};

export default Signup;