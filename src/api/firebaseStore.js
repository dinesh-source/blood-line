import {
  updateDoc,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { db, app } from "../firebase";
import { auth } from "./firebaseAuth";

export const addUserData = async (phone, age, gender, bloodType) => {
  try {
    await updateDoc(doc(db, "userDetails", auth.currentUser.uid), {
      phone: phone,
      age: age,
      gender: gender,
      bloodType: bloodType,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addSignupData = async (name, email) => {
  try {
    const docRef = await setDoc(doc(db, "userDetails", auth.currentUser.uid), {
      name: name,
      email: email,
    });
    return docRef;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    return error;
  }
};

export const getUserData = async () => {
  try {
    const docRef = doc(db, "userDetails", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    console.log(error);
  }
};

export const addUserCoordinates = async (latitude, longitude) => {
  try {
    await updateDoc(doc(db, "userDetails", auth.currentUser.uid), {
      coods: {
        latitude: latitude,
        longitude: longitude,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDonorData = async () => {
  try {
    const data = await getDocs(collection(db, "userDetails"));
    return data.docs.map((doc) => doc.data());
  } catch (error) {
    console.log(error);
  }
};
