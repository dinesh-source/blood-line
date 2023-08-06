import React, { useEffect } from "react";
import styled from "styled-components";
import { auth } from "../../api/firebaseAuth.js";
import { reducerCases } from "../../utils/Constants.js";
import { useStateProvider } from "../../utils/StateProvider.jsx";
import NavBar from "../../components/NavBar.jsx";
import ProfilePopUp from "../../components/ProfilePopUp.jsx";
import { getUserData } from "../../api/firebaseStore.js";
import MapScreen from "../mapScreen/MapScreen.jsx";

const Home = () => {
  // eslint-disable-next-line no-empty-pattern, no-unused-vars
  const [{ profilePopUp, email, name }, dispatch] = useStateProvider();

  useEffect(() => {
    dispatch({
      type: reducerCases.SET_IS_VALID,
      isValidate: auth?.currentUser?.emailVerified,
    });

    const getData = async () => {
      const data = await getUserData();
      dispatch({ type: reducerCases.SET_EMAIL, email: data?.email });
      dispatch({ type: reducerCases.SET_NAME, name: data?.name });
    };
    getData();
  }, [dispatch]);

  return (
    <Container>
      <NavBar />
      {profilePopUp ? <ProfilePopUp /> : null}
      <MapScreen />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  .map-container {
    width: 100vw;
    height: 87.7vh;
    position: relative;
  }
  .mapboxgl-control-container {
  }
`;
