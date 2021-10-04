import React from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { auth, provider } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogOut, setActiveUser } from "./features/counter/userSlice";
import { selectUserName, selectUserEmail } from "./features/counter/userSlice";
import { Button } from "@mui/material";
function App() {
  //tool to set up a new value we will use
  const dispatch = useDispatch();
  //read out the current state
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          setActiveUser({
            userName: result.user.displayName,
            userEmail: result.user.email,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => dispatch(setUserLogOut))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      {userName ? (
        <>
          <Button onClick={handleSignOut}>Log Out</Button>
          <Header />
          <Body />
        </>
      ) : (
        <Button onClick={handleSignIn}>Log In</Button>
      )}
    </div>
  );
}

export default App;
