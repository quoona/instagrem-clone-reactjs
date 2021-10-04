/* eslint-disable jsx-a11y/alt-text */
import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoodIcon from "@mui/icons-material/Mood";
function PostIG({ profilePic, message, username, image }) {
  return (
    <Post>
      <PostTop>
        {profilePic && <Avatar src={profilePic} />}
        <PostTopInfo>
          <p>{username}</p>
          <More></More>
        </PostTopInfo>
      </PostTop>

      <PostImage>
        <img src={image} />
      </PostImage>

      <PostOptions>
        <PostOption>
          <FavoriteBorderOutlinedIcon />
        </PostOption>
        <PostOption>
          <MessageOutlinedIcon />
        </PostOption>
        <PostOption>
          <NavigationOutlinedIcon />
        </PostOption>
        <PostOption>
          <BookmarkBorderOutlinedIcon />
        </PostOption>
      </PostOptions>

      <PostBottom>
        <p>{message}</p>
      </PostBottom>
      <PostComment>
        <span>
          <MoodIcon />
        </span>
        <input type="text" placeholder="Comment đi và bạn sẽ lên tivi" />
      </PostComment>
    </Post>
  );
}

export default PostIG;
const Post = styled.div`
  width: 100%;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  border-radius: 5px;
  margin-top: 20px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;
const PostTop = styled.div`
  display: flex;

  align-items: center;
  padding: 10px;
  p {
    margin-left: 14px;
  }
`;

const PostTopInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const PostBottom = styled.div`
  padding: 10px 20px;
`;

const PostImage = styled.div`
  img {
    width: 100%;
  }
`;

const PostOptions = styled.div`
  display: flex;
  padding: 15px 5px;
`;

const PostOption = styled.div`
  padding-left: 15px;
  justify-content: center;
  align-items: center;
`;

const More = styled(MoreHorizIcon)``;

const PostComment = styled.div`
  display: flex;
  align-items: center;
  border-top: solid 1px rgba(var(--b6a, 219, 219, 219), 1);
  padding: 10px;
  margin-top: 5px;
  span {
    cursor: pointer;
  }
  input {
    width: 100%;
    border: none;
    padding: 10px;
    background-color: transparent;
    outline-width: 0;
  }
`;
