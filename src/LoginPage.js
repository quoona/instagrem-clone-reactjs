/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import { auth, provider } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogOut, setActiveUser } from "./features/counter/userSlice";
import { selectUserName, selectUserEmail } from "./features/counter/userSlice";
import { Button } from "@mui/material";
function LoginPage() {
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
    <Container>
      <ContentLeft>
        <img src="https://brasol.vn/public/ckeditor/uploads/tin-tuc/brasol.vn-logo-instargram-logo-instagram.png" />
      </ContentLeft>
      <ContentRight>
        <Button onClick={handleSignIn}>Sign In</Button>
      </ContentRight>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
  flex-direction: column;
  padding: 10px;
`;

const ContentLeft = styled.div`
  img {
    width: 200px;
    object-fit: contain;
  }
`;

const ContentRight = styled.div``;
