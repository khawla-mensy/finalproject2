import UserCard from "../UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { allUsers } from "../../Redux/actions/user";
import "./Users.css";
const Users = () => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.userReducer.users);

    useEffect(() => {
        dispatch(allUsers());
    }, []);
    return !users ? (
        <h1>loading</h1>
    ) : (
        <div>
            <h2> ALL USERS</h2>
            <div className="userslist">
                {users.map((user) => (
                    <UserCard user={user} key={user._id} />
                ))}
            </div>
        </div>
    );
};

export default Users;
