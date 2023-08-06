import React, { useRef } from "react";
import styled from "styled-components";
import { sendVerificationEmail } from "../../api/firebaseAuth.js";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const timer = useRef(null);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async () => {
    sendVerificationEmail();
  };

  return (
    <Container>
      <h1>Verify your Email</h1>
      <p>Verification email has send't to your account</p>
      <div className="click-here">
        Once verified&nbsp;
        <p className="sendMail" onClick={() => handleLogin()}>
          Click here
        </p>
        &nbsp;to login
      </div>
      <div className="click-here" ref={timer}>
        <p className="sendMail" onClick={() => handleSubmit()}>
          Click hear
        </p>
        &nbsp;to send verification email again
      </div>
      <img
        src="https://opendoodles.s3-us-west-1.amazonaws.com/reading.png"
        alt=""
      />
    </Container>
  );
};

export default VerifyEmail;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eae7e1;
  img {
    width: 40%;
    /* margin: 0; */
  }
  button {
    /* padding: 15px 25px;
    border-radius: 10px;
    border: none;
    background-color: #eae7e1;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    border: 2px solid #f8f8f8;
    transition: all 0.2s ease-in-out;
    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
    } */
  }
  .click-here {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sendMail {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
  }
`;
