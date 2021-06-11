import React from "react";
import "./UserCard.css";
import { useDispatch, useSelector } from "react-redux";

import { deleteuser } from "../../Redux/actions/user";

function UserCard({ user }) {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userReducer.user._id);
    // const user = useSelector((state) => state.userReducer.user);
    return (
        <div className="genereldivusercard">
            <div className="detailusersusercard">
                <div className="imageusercard">
                    <img
                        src="https://i.imgur.com/hGpnL0K.png"
                        height="150px"
                        width="150px"
                    />
                </div>
                <div className="nameidemail">
                    <div className="nameidemailcenter">
                        <h2>Name :</h2>
                        <h2>{user.name}</h2>
                    </div>
                    <div className="nameidemailcenter">
                        <p>UserId:</p>
                        <h2> {user._id}</h2>
                    </div>
                    <div className="nameidemailcenter">
                        <h2>Email :</h2>
                        <h2>{user.email}</h2>
                    </div>
                </div>

                <div>
                    <button
                        className=" Deleteuserusercard"
                        type="button"
                        onClick={() => {
                            dispatch(deleteuser(user._id));
                        }}
                    >
                        {" "}
                        Delete User{" "}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
