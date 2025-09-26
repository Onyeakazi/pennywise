import { auth, googleProvider } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

// Signup with email & password
export const signup = async (name, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredential.user, { displayName: name });
  return userCredential;
};

// Login with email & password
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Google Login
export const googleLogin = () => {
  return signInWithPopup(auth, googleProvider);
};

// Logout
export const logout = () => {
  return signOut(auth);
};
