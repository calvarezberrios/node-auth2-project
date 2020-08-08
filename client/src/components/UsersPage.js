import React, { useState, useEffect } from 'react';
import { Button } from "@material-ui/core";
import axiosWithAuth from '../utils/axiosWithAuth';

const UsersPage = props => {
    const [users, setUsers] = useState();

    useEffect(() => {
        axiosWithAuth()
            .get("/users")
            .then(res => {
                setUsers(res.data);
            })
    }, []);
    return (
        <div>
            <h2>Users Page</h2>
            <Button variant = "contained" onClick = {() => {
                localStorage.clear();
                props.history.push("/");
            }}>Logout</Button>
            {users && users.map(user => <li key = {user.id}>Username: {user.username} - Department: {user.department}</li>)}
        </div>
    );
};

export default UsersPage;