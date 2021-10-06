import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserEmail } from "./features/counter/userSlice";
import { setActiveUser, setUserLogOut } from "./features/counter/userSlice";
import LoginPage from "./LoginPage";
import { auth } from "./firebase";
function App() {
  //tool to set up a new value we will use
  const dispatch = useDispatch();
  //read out the current state
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(`user is`, userAuth);
        dispatch(
          setActiveUser({
            userUid: userAuth.uid,
            userPhoto: userAuth.photoURL,
            userEmail: userAuth.email,
            userName: userAuth.displayName,
          })
        );
      } else {
        //user logout
        dispatch(setUserLogOut());
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      {userName ? (
        <>
          <Header />
          <Body />
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
