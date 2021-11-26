import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const getAuthentication = () => {
  return initializeApp(firebaseConfig);
};
export default getAuthentication;
