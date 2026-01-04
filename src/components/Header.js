import {
  LOGO_URL,
  USER_DUMMY_NAME,
  USER_PROFILE_URL,
} from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/store/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/store/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedInUser = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (User) => {
      if (User) {
        dispatch(
          addUser({
            uid: User.uid,
            email: User.email,
            displayName: User.displayName,
            photoURL: User.photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // above function returns an unsubscribe function
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignout = () => {
    // Sign out logic can be added here
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44" src={LOGO_URL} alt="Netflix Logo" />
      {loggedInUser && (
        <div className="flex items-center space-x-4 text-white">
          <img
            className="w-12 h-12"
            src={loggedInUser.photoURL || USER_PROFILE_URL}
            alt="User profile"
          />
          <div className="flex flex-col items-center space-x-4">
            <span className="text-white ">
              {loggedInUser.displayName || USER_DUMMY_NAME}
            </span>
            <button className="text-white" onClick={handleSignout}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
