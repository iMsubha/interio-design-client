import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
const Login = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: "false",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    success: "",
  });
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const inputStyle = {
    width: "350px",
  };
  const handleBlur = (e) => {
    let isFieldValid;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password" || "confirmPassword") {
      const isPasswordValid = e.target.value.length > 6;
      const hasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && hasNumber;
      console.log("password", isFieldValid);
    }
    if (e.target.name === "name") {
      // const newUserName = e.target.value;
      // console.log(newUserName)
      isFieldValid = e.target.value;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    //newUser &&
    if (newUser && user.email && user.password && user.confirmPassword) {
      if (user.confirmPassword === user.password) {
        console.log("con", user.confirmPassword);
        console.log("pass", user.password);
        firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            const newUserInfo = { ...user };
            newUserInfo.error = "";
            newUserInfo.success = true;
            setUser(newUserInfo);
            updateUserName(user.name);
            const loginUser = {
              name: user.name,
              email: user.email,
            };
            setLoginUser(loginUser);
            history.replace(from);
          })
          .catch((err) => {
            console.log(err.message);
            const newUserInfo = { ...user };
            newUserInfo.error = err.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
          });
      }
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
        })
        .catch((err) => {
          const newUserInfo = { ...user };
          newUserInfo.error = err.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signInUser = {
          isSignedIn: true,
          name: displayName,
          email,
        };
        setUser(signInUser);
        setLoginUser(signInUser);
        history.replace(from);
        //console.log(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
        console.log("user name updated successfully");
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="">
      <h6 className="text-center pt-4" style={{ color: "red" }}>
        {user.error}
      </h6>
      {user.success && (
        <h6 className="text-center pt-4" style={{ color: "green" }}>
          User {newUser ? "Created" : "Logged in"} Successfully!!{" "}
          <ThumbUpIcon fontSize={"small"} htmlColor={"green"} />{" "}
        </h6>
      )}
      <div className="container ">
        <Form className="d-flex flex-column justify-content-center align-items-center border mt-4 p-5">
          <h5 className="mb-4 font-weight-bold">
            {newUser ? "Create an account" : "Login"}
          </h5>
          {newUser && (
            <div>
              <input
                style={inputStyle}
                className="mb-4"
                type="text"
                name="name"
                onBlur={handleBlur}
                placeholder="Name"
                required
              />
            </div>
          )}
          <div>
            <input
              style={inputStyle}
              className="mb-4"
              type="text"
              name="email"
              onBlur={handleBlur}
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              style={inputStyle}
              className="mb-4"
              type="password"
              name="password"
              onBlur={handleBlur}
              placeholder="Password"
              required
            />
          </div>
          {newUser && (
            <div>
              <input
                style={inputStyle}
                className="mb-4"
                type="password"
                name="confirmPassword"
                onBlur={handleBlur}
                placeholder="Confirm Password"
                required
              />
            </div>
          )}
          <br />

          {newUser ? (
            <Link to={`/`}>
              <input
                onClick={handleSubmit}
                className="p-2 text-dark font-weight-normal"
                style={{
                  backgroundImage: "linear-gradient(45deg, #ddd6f3 0%, #b0dab9 100%)",
                  border: "none",
                  width: "350px",
                  color: "white",
                }}
                type="submit"
                value="Create an account"
              />
            </Link>
          ) : (
            <input
              onClick={handleSubmit}
              className="p-2 text-dark font-weight-normal"
              style={{
                backgroundImage: "linear-gradient(45deg, #ddd6f3 0%, #b0dab9 100%)",
                border: "none",
                width: "350px",
                color: "white",
              }}
              type="submit"
              value="Login"
            />
          )}

          {newUser === false && (
            <div className="d-flex justify-content-center">
              <p>Don't have an account?</p>
              <Link
                to={`/login`}
                style={{ color: "#ddd6f3" }}
                onClick={() => setNewUser(true)}
              >
                Create an account
              </Link>
            </div>
          )}
          {newUser && (
            <div className="d-flex justify-content-center">
              <p>Already have an account?</p>
              <Link
                to={`/login`}
                onClick={() => {
                  history.go(0);
                }}
                style={{ color: "#ddd6f3" }}
              >
                Login
              </Link>
            </div>
          )}
        </Form>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center pt-2">
        <div className="d-flex">
          <div style={{ width: "150px" }}>
            <hr />
          </div>
          <p>Or</p>
          <div style={{ width: "150px" }}>
            <hr />
          </div>
        </div>
     
        <Button
          onClick={handleGoogleSignIn}
          style={inputStyle}
          className="d-block mb-3 bg-white text-dark rounded-pill border"
        >
         
          Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
