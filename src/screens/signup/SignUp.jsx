import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { register, sendVerificationEmail } from "../../api/firebaseAuth.js";
import { addSignupData } from "../../api/firebaseStore.js";
import { useStateProvider } from "../../utils/StateProvider.jsx";
import { reducerCases } from "../../utils/Constants.js";

const Signup = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ email, name }, dispatch] = useStateProvider();

  const [_email, _setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_name, _setName] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(_email, password);

    console.log(user);
    navigate("/verifyaccount");
    if (user) {
      const data = await addSignupData(_name, _email);
      dispatch({ type: reducerCases.SET_EMAIL, email: _email });
      dispatch({ type: reducerCases.SET_NAME, name: _name });
      console.log(data);
      sendVerificationEmail();
    }
  };

  return (
    <Container>
      <div className="login-card">
        <div className="login-header">
          <h1>Sign Up</h1>
          <p>Please enter your detail</p>
        </div>
        <div className="login-body">
          <form>
            <input
              type="text"
              placeholder="Name"
              required
              value={_name}
              onChange={(e) => _setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={_email}
              onChange={(e) => _setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={(e) => handleSubmit(e)}>Next</button>
          </form>
          <p>-- Or sign in with --</p>
          <div className="other-sign-in">
            <button>
              <AiOutlineGoogle /> Google
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eae7e1;
  .login-card {
    height: 500px;
    width: 400px;
    background-color: #f8f8f8;
    border-radius: 25px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .login-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 30px;
        font-weight: 800;
      }
      p {
        margin-top: -1rem;
      }
    }
    .login-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        input {
          width: 90%;
          height: 40px;
          border-radius: 10px;
          border: 2px solid rgba(0, 0, 0, 0.1);
          outline: none;
          margin: 10px 0px;
          padding: 0 15px;
          font-size: 12px;
          font-weight: 500;
        }
        button {
          width: 300px;
          height: 40px;
          border-radius: 10px;
          border: none;
          outline: none;
          margin: 10px 0px;
          font-size: 12px;
          font-weight: 600;
          background-color: #88da1a;
          color: #2a2a2a;
          cursor: pointer;
        }
      }
      p {
        font-size: 12px;
      }
      .other-sign-in {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        button {
          width: 100px;
          height: 40px;
          border-radius: 10px;
          border: 2px solid rgba(0, 0, 0, 0.1);
          outline: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 12px;
          font-weight: 600;
          background-color: #f8f8f8;
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 480px) {
    .login-card {
      height: 500px;
      width: 300px;
      .login-header {
      }
      .login-body {
        form {
          input {
            width: 90%;
          }
          button {
            width: 90%;
          }
        }
      }
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
  }
  @media (max-width: 769px) {
  }
`;
