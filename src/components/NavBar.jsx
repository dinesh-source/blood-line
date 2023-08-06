import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { RxSwitch } from "react-icons/rx";
import { BiDonateBlood, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";

const NavBar = () => {
  const [{ profilePopUp }, dispatch] = useStateProvider();
  const [profileClick, setProfileClick] = useState(false);

  const handleProfilePopUp = () => {
    setProfileClick(!profileClick);
    dispatch({
      type: reducerCases.SET_PROFILE_POPUP,
      profilePopUp: !profilePopUp,
    });
  };

  return (
    <Container>
      <h1>BloodLine</h1>
      <div className="search-bar-container">
        <div className="search">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="nav-right">
        <div className="request">
          Request <BiDonateBlood />
        </div>
        <div className="donate-switch">
          Donate <RxSwitch />
        </div>
        <div className="profile">
          <AiOutlineUser className="profile-icon" />
          <div onClick={() => handleProfilePopUp()}>
            Me {profileClick ? <BiChevronUp /> : <BiChevronDown />}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  z-index: 10;
  width: 100%;
  height: 12vh;
  border-bottom: rgba(0, 0, 0, 0.1) solid 1px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-around;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #88da1a;
  }
  .search-bar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .search {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border: 2px solid rgba(0, 0, 0, 0.1);
      padding: 0.7rem 2rem;
      border-radius: 50px;
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
      .search-icon {
        background-color: #88da1a;
        padding: 0.5rem;
        border-radius: 50%;
        color: white;
        margin-left: -1rem;
      }
      input {
        border: none;
        outline: none;
      }
    }
  }
  .nav-right {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    .profile {
      display: flex;
      align-items: center;
      column-gap: 10px;
    }
    .request {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      font-weight: 500;
    }
    .donate-switch {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      font-weight: 500;
    }
    .profile-icon {
      background-color: #88da1a;
      padding: 0.5rem;
      border-radius: 50%;
      color: white;
    }
  }
`;
