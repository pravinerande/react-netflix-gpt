import { useRef, useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE_URL } from "../utils/constants";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    // Logic to toggle to signup form
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validation = checkValidData(
      email.current.value,
      password.current.value
    );

    if (validation) {
      setErrorMsg(validation);
      return;
    }

    // further logic for sign in or sign up can be added here
    if (isSignInForm) {
      console.log(
        "Signing In with",
        email.current.value,
        password.current.value
      );
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);

          // dispatch(
          //   addUser({
          //     uid: user.uid,
          //     email: user.email,
          //     displayName: user.displayName,
          //     photoURL: user.photoURL,
          //   })
          // );

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error during sign in:", errorCode, errorMessage);
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      console.log(
        "Signing Up with",
        email.current.value,
        password.current.value,
        fullName.current.value.fullName
      );
      // Sign up logic can be added here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User created:", user);
          // dispatch(
          //   addUser({
          //     uid: user.uid,
          //     email: user.email,
          //     displayName: fullName.current.value,
          //     photoURL: user.photoURL,
          //   })
          // );
          updateUserProfile(user, fullName.current.value);
        })
        .catch((error) => {
          console.log("Error during sign up:", error);
          setErrorMsg(error.message);
        });
    }
  };

  const updateUserProfile = (user, name) => {
    updateProfile(user, {
      displayName: name || "Random User",
      photoURL: "https://avatars.githubusercontent.com/u/6948496?v=4",
    })
      .then(() => {
        console.log("User profile updated successfully");
        navigate("/browse");
      })
      .catch((error) => {
        console.log("Error updating user profile:", error);
        setErrorMsg(error.message);
      });
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="w-screen h-screen object-cover"
          src={BACKGROUND_IMAGE_URL}
          alt="Netflix Login"
        />
      </div>
      <form
        className="absolute w-4/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-8 my-8 rounded-md"
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-3xl font-bold mb-8 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 mb-8 rounded bg-gray-800 text-white"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or phone number"
          className="w-full px-4 py-3 mb-8 rounded bg-gray-800 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-8 rounded bg-gray-800 text-white"
        />
        <p className="text-red-500 mb-4">{errorMsg}</p>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400 mt-4" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span className="text-blue-500 cursor-pointer">Sign up now.</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span className="text-blue-500 cursor-pointer">Sign in now.</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
