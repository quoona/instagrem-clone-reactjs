import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Story from "./Story";
import PostIG from "./PostIG";
import SidebarRow from "./SidebarRow";

import SidebarRowBottom from "./SidebarRowBottom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import db, { auth } from "./firebase";
function Body() {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      //retrive all data from the document as object doc.data()
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    console.log("useeffect run");
  }, []);

  return (
    <Container>
      <Section>
        <ContentLeft>
          <StoryStray>
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
            <Story profilePic="./images/cat.jpg" title="Quoonaa" />
          </StoryStray>
          {posts.map((post) => (
            <PostIG
              key={post.data.id}
              profilePic={post.data.profilePic}
              message={post.data.message}
              username={post.data.username}
              image={post.data.image}
            />
          ))}
        </ContentLeft>
        <ContentRight>
          <SidebarRow
            profilePic={user.userPhoto}
            title={user.userName}
            username={user.userName}
          />

          <SidebarRowBottom
            friendUsername="Cheems"
            profileFriendPic="./images/cheems_3.jpg"
            follows="follows you"
          />
          <SidebarRowBottom
            friendUsername="Joker"
            profileFriendPic="./images/cheems.jpg"
            follows="follows you"
          />
          <SidebarRowBottom
            friendUsername="Minh"
            profileFriendPic="./images/cat_2.jpg"
            follows="follows you"
          />
          <SidebarRowBottom
            friendUsername="PB"
            profileFriendPic="./images/cheems_2.jpg"
            follows="follows you"
          />
        </ContentRight>
      </Section>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  width: 100%;

  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

const Section = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 30px;
  //   background-color: lightblue;
  max-width: 970px;
  display: flex;
`;

const ContentLeft = styled.div`
  width: 612px;
  //   background-color: gray;
`;

const ContentRight = styled.div`
  width: 100%;
  max-width: 293px;
  margin-left: 30px;
  height: calc(100vh - 35px);
  // background-color: lightgreen;
  left: 934.1px;
`;

const StoryStray = styled.div`
  width: 612px;
  height: 70px;
  background: rgba(var(--d87, 255, 255, 255), 1);
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 5px;
  margin-bottom: 24px;
  margin-top: 0;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
