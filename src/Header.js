/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { Avatar, IconButton } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
function Header() {
  return (
    <Container>
      <Nav>
        <Logo>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png" />
        </Logo>
        {/* <img src={<InstagramIcon />} alt="" /> */}

        <SearchInput>
          <SearchOutlinedIcon style={{ fill: "gray" }} fontSize="small" />

          <span>
            <input placeholder="Search" type="text"></input>
          </span>
        </SearchInput>
        <MenuLeft>
          <IconButton>
            <HomeIcon style={{ fill: "#262626", fontSize: 27 }} />
          </IconButton>
          <IconButton>
            <MessageOutlinedIcon style={{ fill: "#262626", fontSize: 27 }} />
          </IconButton>

          <IconButton>
            <ExploreOutlinedIcon style={{ fill: "#262626", fontSize: 27 }} />
          </IconButton>
          <IconButton>
            <FavoriteBorderOutlinedIcon
              style={{ fill: "#262626", fontSize: 27 }}
            />
          </IconButton>
          <IconButton>
            <Avatar src="./images/cat.jpg" />
          </IconButton>
          <IconButton>
            <MeetingRoomIcon />
          </IconButton>
        </MenuLeft>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  // width: 100%;
  height: 35px;
  padding: 10px;
  margin: auto;
  overflow: hidden;
  background-color: rgba(var(--d87, 255, 255, 255), 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  position: relative;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center
  padding: 1px;
  border-radius: 4px;
  border: solid 1px rgba(var(--b6a,219,219,219),1);
  padding: 3px;
  background-color: rgba(var(--b3f,250,250,250),1);
  input {
    border: none;
    
    background-color: transparent;
    outline-width: 0;
  }
`;

const MenuLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 80%;
  justify-content: space-around;
`;

const Logo = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    object-fit: contain;
  }
`;
