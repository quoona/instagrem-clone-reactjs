/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
function SidebarRow({ profilePic, title, username }) {
  return (
    <Container>
      <ContentTop>
        <Contentleft>{profilePic && <img src={profilePic} />}</Contentleft>
        <ContentleftInfo>
          <b>{username}</b>
          <span>{title}</span>
        </ContentleftInfo>
        
      </ContentTop>

      <ContentCenter>
        <span>Suggestions For You</span>
        <p>See All</p>
      </ContentCenter>
    </Container>
  );
}

export default SidebarRow;

const Container = styled.div`
  position: relative;
`;

const Contentleft = styled.div``;

const ContentleftInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 13px;
  margin-left: 5px;

  span {
    color: gray;
    font-size: 15px;
  }
  b {
    font-size: 15px;
  }
`;

const ContentTop = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: contain;
    cursor: pointer;
  }
`;

const ContentCenter = styled.div`
  display: flex;
  align-items: center;
  max-width: 85%;
  justify-content: space-between;
  padding: 10px 10px;
  span {
    font-size: 13px;
    color: gray;
  }

  p {
    font-size: 13px;
    font-weight: 400;
  }
`;

// const ContentLogout = styled.div`
//   display: flex;
//   margin-top: 18px;
//   justify-content: flex-end;
//   align-items: center;
//   a {
//     font-size: 13px;
//     color: blue;
//     text-decoration: none;
//   }
// `;
