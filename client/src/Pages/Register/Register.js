import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, videErrors } from "../../Redux/actions/user";
import Errors from "../../Components/Errors/Error";
import "./Register.css";

const Register = ({ history }) => {
    const [user, setUser] = useState({});
    const errors = useSelector((state) => state.userReducer.errors);

    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(user, history));
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        return () => {
            dispatch(videErrors());
        };
    }, [dispatch]);

    return (
        <div id="login-box">
            {/* {errors.length > 0
                ? errors.map((el) => <Errors error={el} />)
                : null} */}
            <form onSubmit={(e) => handleRegister(e)}>
                <div className="left">
                    <h1>Sign up</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Username"
                        required
                        autofocus
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        required
                        autofocus
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="phone"
                        placeholder="PhoneNumber"
                        required
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                        name="signup_submit"
                        defaultValue="Sign me up"
                        onClick={handleRegister}
                    />
                </div>
            </form>
        </div>
    );
};

export default Register;
