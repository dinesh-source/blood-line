import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PhoneInput from "react-phone-number-input";

const UserDetails = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    console.log("UserDetails.jsx: useEffect: value: ", value);
  }, [value]);

  return (
    <Container>
      <div className="card">
        <h2>Create your Bloodline account</h2>
        <form>
          <input className="input" type="text" placeholder="Full Name" />
          <PhoneInput
            className="phone-input"
            placeholder="Enter your number"
            defaultCountry="IN"
            value={value}
            onChange={setValue}
          />
          <select>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <button className="submit">Sign Up</button>
        </form>
      </div>
    </Container>
  );
};

export default UserDetails;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eae7e1;
  .card {
    height: 500px;
    width: 400px;
    background-color: #f8f8f8;
    border-radius: 25px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    h2 {
      font-size: 20px;
      margin-bottom: -3rem;
    }
    form {
      display: flex;
      flex-direction: column;
      input,
      select {
        width: 300px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 0 15px;
        margin-bottom: 10px;
        outline: none;
      }
      select {
        width: 330px;
      }

      button {
        width: 330px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 0 15px;
        margin-bottom: 10px;
        outline: none;
        font-size: 14px;
        font-weight: 700;
        transition: all 0.3s ease-in-out;
      }
    }
    .phone-input {
      width: 270px;
      .PhoneInputCountryIconImg {
        border-radius: 5px;
      }
    }
    img {
      width: 60px;
    }
    .PhoneInputCountry {
      display: flex;
    }
  }
`;
