import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
        );
        navigate('/login')
    });

  };
  return (
    <Form title={"register"} handleRegister handleClick={handleRegister} />
  );
};

export default Register;
