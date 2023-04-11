import React, { useEffect } from "react";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <p>HOME</p>
      <button onClick={() => dispatch(removeUser())}>sign out {email}</button>
    </div>
  ) : (
    navigate("/login")
  );
};

export default HomePage;
