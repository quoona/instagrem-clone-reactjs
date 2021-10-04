import React from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { auth, provider } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogOut, setActiveUser } from "./features/counter/userSlice";
import { selectUserName, selectUserEmail } from "./features/counter/userSlice";
import { Button } from "@mui/material";

import LoginPage from "./LoginPage";
function App() {
  //tool to set up a new value we will use
  const dispatch = useDispatch();
  //read out the current state
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  

  return (
    <div className="App">
      {!userName ? (
        <LoginPage />
      ) : (
        <>
          <Header />
          <Body />
        </>
      )}
    </div>
  );
}

export default App;
