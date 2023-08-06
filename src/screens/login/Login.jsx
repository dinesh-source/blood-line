import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constants";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/firebaseAuth";
import { isUserLoggedIn } from "../../api/firebaseAuth";

const Login = () => {
  const navigate = useNavigate();
  const borderRefEmail = useRef(null);
  const borderRefPass = useRef(null);
  const errorBanner = useRef(null);

  const [{ isLoggedIn, isValidate }, dispatch] = useStateProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isUserLoggedIn()) {
      dispatch({ type: reducerCases.SET_IS_LOGGED_IN, isLoggedIn: true });
    }
    if (isLoggedIn && isValidate) {
      navigate("/");
    }
  }, [dispatch, isLoggedIn, isValidate, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await login(email, password);
    console.log(user);

    if (user.code === "auth/wrong-password") {
      errorBanner.current.style.display = "block";
      errorBanner.current.innerHTML = "Wrong password";
      borderRefEmail.current.style.border = "2px solid red";
      borderRefPass.current.style.border = "2px solid red";
    } else if (user.code === "auth/user-not-found") {
      errorBanner.current.style.display = "block";
      errorBanner.current.innerHTML = "User not found";
      borderRefEmail.current.style.border = "2px solid red";
      borderRefPass.current.style.border = "2px solid red";
    } else if (user.code === "auth/invalid-email") {
      errorBanner.current.style.display = "block";
      errorBanner.current.innerHTML = "Invalid email";
      borderRefEmail.current.style.border = "2px solid red";
      borderRefPass.current.style.border = "2px solid red";
    }

    dispatch({ type: reducerCases.SET_IS_VALID, isValidate: true });
    if (user.emailVerified) {
      navigate("/");
    } else {
      navigate("/verifyaccount");
    }
  };

  return (
    <Container>
      <div className="login-card">
        <div className="login-header">
          <h1>Sign In</h1>
          <p>Please enter your detail</p>
        </div>
        <div className="login-body">
          <form>
            <div className="errorBanner" ref={errorBanner}>
              Wrong password
            </div>
            <input
              ref={borderRefEmail}
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              ref={borderRefPass}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>Forgot password</p>
            <button onClick={(e) => handleLogin(e)}>Sign In</button>
          </form>
          <p>-- Or sign in with --</p>
          <div className="other-sign-in">
            <button>
              <AiOutlineGoogle /> Google
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;

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
      .errorBanner {
        display: none;
        color: red;
      }
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
          padding: 0px 15px;
          outline: none;
          margin: 10px 0px;
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
