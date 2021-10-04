import React from "react";
import styled from "styled-components";
function Story({ profilePic, title }) {
  return (
    <Container>
      <img src={profilePic} />
      <span>{title}</span>
    </Container>
  );
}

export default Story;

const Container = styled.div`
  top: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid lightcoral;
    object-fit: contain;
    cursor: pointer;
  }
  span {
    font-size: 10px;
    margin-top: 4px;
  }
`;
