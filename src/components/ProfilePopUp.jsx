import React, { useEffect } from "react";
import styled from "styled-components";
import { logout } from "../api/firebaseAuth.js";
import { getUserData } from "../api/firebaseStore.js";
import { reducerCases } from "../utils/Constants.js";
import { useStateProvider } from "../utils/StateProvider.jsx";
import { useNavigate, Link } from "react-router-dom";

const ProfilePopUp = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ isLoggedIn, name }, dispatch] = useStateProvider();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await getUserData();
      dispatch({ type: reducerCases.SET_NAME, name: data?.name });
    };
    getData();
  }, [dispatch]);

  const handleSignOut = () => {
    logout();
    dispatch({ type: reducerCases.SET_IS_LOGGED_IN, isLoggedIn: false });
    navigate("/login");
  };

  return (
    <Container>
      <div className="profile-pic-container">
        <div className="profile-pic">
          <img
            src="https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg?resize=400x0"
            alt="profile-pic"
          />
        </div>
        <h3>{name}</h3>
      </div>
      <div className="profile-settings">
        <Link className="settings" to="/profile">
          Edit Profile
        </Link>
        <Link className="settings" to="/aboutus">
          About Us
        </Link>
        <Link className="settings" to="/help">
          Help
        </Link>
      </div>
      <button onClick={() => handleSignOut()}>Sign Out</button>
    </Container>
  );
};

export default ProfilePopUp;

const Container = styled.div`
  z-index: 2;
  width: 250px;
  height: 40%;
  border-radius: 15px;
  position: absolute;
  top: 13vh;
  right: 1vw;
  z-index: 1;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .profile-pic-container {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    column-gap: 1rem;
    .profile-pic {
      width: 60px;
      height: 60px;
      background-color: red;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid #88da1a;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .profile-settings {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    .settings {
      list-style: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      color: #282828;
      text-decoration: none;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
  button {
    cursor: pointer;
    width: 50%;
    border: none;
    outline: none;
    background-color: #88da1a;
    color: white;
    border-radius: 25px;
    font-weight: 600;
    padding: 0.7rem 1rem;
  }
`;
