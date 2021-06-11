import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import User from "../../../../models/User";
import { current, deleteProfile, editProfile } from "../../Redux/actions/user";
import "./Profile.css";

const Profile = (match) => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.userReducer.user);

    const [Userprofile, setUserprofile] = useState({});

    useEffect(() => {
        dispatch(current());
    }, []);

    return (
        <div className="generaldiv" id="page-content">
            <div className="padding">
                <div
                    className="row container d-flex justify-content-center"
                    id="card"
                >
                    <div className="col-xl-6 col-md-12">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                    <div className="card-block text-center text-white">
                                        <div id="imageandname">
                                            <div className="m-b-25">
                                                {" "}
                                                <img
                                                    src="https://i.imgur.com/hGpnL0K.png"
                                                    heigh="100px"
                                                    width="100px"
                                                    className="img-radius"
                                                    alt="User-Profile-Image"
                                                />{" "}
                                            </div>
                                            <div>
                                                <h6 className="name">
                                                    {user && user.name}
                                                </h6>
                                            </div>
                                        </div>

                                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                                            Information:
                                        </h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">
                                                    Email
                                                </p>
                                                <h6 className="text-muted f-w-400">
                                                    {user && user.email}
                                                </h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">
                                                    Phone
                                                </p>
                                                <h6 className="text-muted f-w-400">
                                                    {user && user.phone}
                                                </h6>
                                            </div>
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Enter user name ..."
                                                name="name"
                                                onChange={(e) =>
                                                    setUserprofile({
                                                        ...user,
                                                        name: e.target.value,
                                                    })
                                                }
                                            />

                                            <input
                                                type="text"
                                                placeholder="Enter user phone..."
                                                name="phone"
                                                onChange={(e) =>
                                                    setUserprofile({
                                                        ...user,
                                                        phone: e.target.value,
                                                    })
                                                }
                                            />

                                            <input
                                                type="text"
                                                placeholder="Enter user mail ..."
                                                name="email"
                                                onChange={(e) =>
                                                    setUserprofile({
                                                        ...user,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />

                                            <button
                                                className="edit-btn"
                                                onClick={() => {
                                                    dispatch(
                                                        editProfile(
                                                            user._id,
                                                            Userprofile
                                                        )
                                                    );
                                                }}
                                            >
                                                Edit profile
                                            </button>

                                            <Link to="/register">
                                                <button
                                                    className="edit-btn"
                                                    onClick={() => {
                                                        dispatch(
                                                            deleteProfile(
                                                                user._id
                                                            )
                                                        );
                                                    }}
                                                >
                                                    Delete profile
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
