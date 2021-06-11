import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, videErrors } from "../../Redux/actions/user";
import Errors from "../../Components/Errors/Error";

import "./Login.css";

const Login = ({ history }) => {
    const [user, setUser] = useState({});
    const errors = useSelector((state) => state.userReducer.errors);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(user, history));
    };

    useEffect(() => {
        return () => {
            dispatch(videErrors());
        };
    }, [dispatch]);

    return (
        <div className="login-wrap">
            <div className="login-html">
                <input
                    id="tab-1"
                    type="radio"
                    name="tab"
                    className="sign-in"
                    defaultChecked
                />
                <label htmlFor="tab-1" className="tab">
                    Sign In
                </label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">
                    Sign Up
                </label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        {/* {errors.length > 0
                            ? errors.map((el) => <Errors error={el} />)
                            : null} */}
                        <form onSubmit={handleLogin}>
                            <div className="group">
                                <label htmlFor="user" className="label">
                                    EMAIL
                                </label>
                                <input
                                    name="email"
                                    id="user"
                                    type="text"
                                    className="input"
                                    required
                                    autofocus
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    id="pass"
                                    type="password"
                                    className="input"
                                    data-type="password"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="group">
                                <input
                                    id="check"
                                    type="checkbox"
                                    className="check"
                                    defaultChecked
                                />
                                <label htmlFor="check">
                                    <span className="icon" /> Keep me Signed in
                                </label>
                            </div>
                            <div className="group">
                                <input
                                    type="submit"
                                    className="button"
                                    defaultValue="Sign In"
                                />
                            </div>
                        </form>

                        <div className="hr" />
                        <div className="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">
                                Username
                            </label>
                            <input id="user" type="text" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">
                                Password
                            </label>
                            <input
                                id="pass"
                                type="password"
                                className="input"
                                data-type="password"
                            />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">
                                Repeat Password
                            </label>
                            <input
                                id="pass"
                                type="password"
                                className="input"
                                data-type="password"
                            />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">
                                Email Address
                            </label>
                            <input id="pass" type="text" className="input" />
                        </div>
                        <div className="group">
                            <input
                                type="submit"
                                className="button"
                                defaultValue="Sign Up"
                            />
                        </div>
                        <div className="hr" />
                        <div className="foot-lnk">
                            <label htmlFor="tab-1">Already Member?</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
