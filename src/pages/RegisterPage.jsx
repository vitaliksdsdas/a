import React from "react";
import { NavLink } from "react-router-dom";
import Register from "../components/Register";

const RegisterPage = () => {
    return(
        <>
            <Register/>
            <NavLink to={'/login'}>login</NavLink>
        </>
    )
};

export default RegisterPage;
