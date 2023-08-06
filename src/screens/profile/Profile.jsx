import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import {
  addUserData,
  getUserData,
  getDonorData,
} from "../../api/firebaseStore";
import ProfilePopUp from "../../components/ProfilePopUp";
import { useStateProvider } from "../../utils/StateProvider";
const Profile = () => {
  const [{ profilePopUp }, dispatch] = useStateProvider();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");

  const getUser = async () => {
    const data = await getUserData();
    setName(data?.name);
    setPhone(data?.phone);
    setEmail(data?.email);
    setAge(data?.age);
    setGender(data?.gender);
    setBloodType(data?.bloodType);
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, [name, age, email, phone, gender, bloodType]);

  const handleSubmit = async () => {
    await addUserData(phone, age, gender, bloodType);
    getUser();
    const data = await getDonorData();
    console.log(data);
  };
  return (
    <Container>
      <NavBar />
      {profilePopUp ? <ProfilePopUp /> : null}
      <div className="user-profile">
        <div className="user-profile-header">
          <div className="user-profile-header-left">
            <img
              src="https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg?resize=400x0"
              alt="profile-pic"
            />
          </div>
          <div className="user-profile-header-right">{name}</div>
        </div>
        <div className="user-profile-body">
          <form>
            <table cellSpacing={35}>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="number"
                    />
                  </td>
                </tr>
                <tr>
                  {/* To do */}
                  <td>Email</td>
                  <td>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.email)}
                      type="email"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>
                    <input
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      type="number"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>
                    <select
                      name="gender"
                      onChange={(e) => setGender(e.target.value)}
                      defaultValue={"DEFAULT"}
                    >
                      <option disabled value={"DEFAULT"}>
                        Select an option
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Blood Type</td>
                  <td>
                    <select
                      value={bloodType}
                      onChange={(e) => setBloodType(e.target.value)}
                      defaultValue={"DEFAULT"}
                    >
                      <option disabled defaultValue={"DEFAULT"}>
                        Select an option
                      </option>
                      <option value="A+">A+</option>
                      <option value="B+">B+</option>
                      <option value="AB+">AB+</option>
                      <option value="O+">O+</option>
                      <option value="A-">A-</option>
                      <option value="B-">B-</option>
                      <option value="AB-">AB-</option>
                      <option value="O-">O-</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          {/* <div className="user-profile-body-right">
            <h1>Location</h1>
            <div className="location"></div>
          </div> */}
          <button onClick={() => handleSubmit()}>Save</button>
        </div>
      </div>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .user-profile {
    width: 60%;
    height: 90vh;
    /* border: 2px solid #88da1a; */
    .user-profile-header {
      display: flex;
      align-items: center;
      column-gap: 1rem;
      margin-top: 1rem;
      .user-profile-header-left {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #88da1a;
        }
      }
      .user-profile-header-right {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
    .user-profile-body {
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: start;
      position: relative;
      column-gap: 5rem;
      form {
        table {
          font-size: 1.2rem;
          font-weight: 500;
          td {
            input {
              outline: none;
              border: 2px solid rgba(0, 0, 0, 0.2);
              border-radius: 5px;
              padding: 0.5rem 1rem;
            }
            select {
              outline: none;
              border: 2px solid rgba(0, 0, 0, 0.2);
              border-radius: 5px;
              padding: 0.5rem 1rem;
              option {
                outline: none;
                border: none;
                padding: 0.5rem 1rem;
              }
            }
          }
        }
      }
      button {
        padding: 0.7rem 1.2rem;
        border: none;
        outline: none;
        border-radius: 25px;
        color: #fff;
        background-color: #88da1a;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        position: absolute;
        bottom: 0;
        right: 50%;
      }
    }
  }
`;
