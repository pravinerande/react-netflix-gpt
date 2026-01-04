import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import ErrorPage from "./Error";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
    {
      path: "/error",
      element: <ErrorPage></ErrorPage>,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (User) => {
      if (User) {
        console.log("User is signed in from Body page:", User);
        dispatch(
          addUser({
            uid: User.uid,
            email: User.email,
            displayName: User.displayName,
            photoURL: User.photoURL,
          })
        );
      } else {
        console.log("No user is signed in from Body page.");
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
