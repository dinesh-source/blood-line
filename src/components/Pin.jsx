import React from "react";
import { CiMapPin } from "react-icons/ci";
import styled from "styled-components";

const Pin = () => {
  return <Container className="marker" id="marker"></Container>;
};

export default Pin;

const Container = styled.div`
  background-image: url("https://pngimg.com/uploads/pin/pin_PNG101.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
