import { useDispatch, useSelector } from "react-redux";
import React from "react";

export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username);

  return <h1> THIS IS THE HOME PAGE {username}</h1>;
};