import { useEffect, useState } from "react";
import getAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

getAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  //USER REGISTER HERE
  const registerUser = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setError("");
        const user = userCredential.user;
        setUser(user);
        saveUser(email, name);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };
  //LOGIN USER
  const logIn = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location.state?.from;
        history.replace(destination);
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
      });
  };
  //MONITOR USER FROM FIREBASE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  //set admin
  useEffect(() => {
    fetch(
      `https://enigmatic-escarpment-96711.herokuapp.com/users/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  //USER LOGOUT HERE
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://enigmatic-escarpment-96711.herokuapp.com/register/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return { user, registerUser, logOut, logIn, isLoading, error, admin };
};
export default useFirebase;
