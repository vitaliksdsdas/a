import { NavLink } from "react-router-dom";

import Login from "../components/Login";

const LoginPage = () => {
  return (
    <>
      <Login />
      <NavLink to={"/register"}>register</NavLink>
    </>
  );
};

export default LoginPage;
