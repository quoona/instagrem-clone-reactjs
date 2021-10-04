/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
function SidebarRowBottom({ profileFriendPic, friendUsername, follows }) {
  return (
    <Container>
      <ContentBottom>
        <Contentleft>
          {profileFriendPic && <Avatar src={profileFriendPic} />}
        </Contentleft>
        <ContentleftInfo>
          <b>{friendUsername}</b>
          <span>{follows}</span>
        </ContentleftInfo>
        <a href="#">Follow</a>
      </ContentBottom>
    </Container>
  );
}

export default SidebarRowBottom;

const Container = styled.div`
  padding: 0 10px;
`;

const ContentBottom = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 80px;
    text-decoration: none;
    font-size: 13px;
    color: blue;
  }
`;

const Contentleft = styled.div``;

const ContentleftInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px;
  margin-left: 5px;
  span {
    color: gray;
    font-size: 12px;
  }
  b {
    font-size: 13px;
  }
`;
