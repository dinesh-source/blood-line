import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase";

export const auth = getAuth(app);

export const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    return error;
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    // console.log(error.code);
    // console.log(error.message);
    return error;
  }
};

export const sendVerificationEmail = async () => {
  try {
    const user = auth.currentUser;
    await sendEmailVerification(user);
    return true;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    return error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    return error;
  }
};

export const isUserLoggedIn = async () => {
  try {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        return true;
      } else {
        return false;
      }
    });
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    return error;
  }
};

export const isVerifiedEmail = async () => {
  try {
    const user = auth.currentUser;
    if (user.emailVerified) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    return error;
  }
};
