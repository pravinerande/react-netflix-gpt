import { use, useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    // Logic to toggle to signup form
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="w-screen h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix Login"
        />
      </div>
      <form className="absolute w-4/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-8 my-8 rounded-md">
        <h2 className="text-3xl font-bold mb-8 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full py-3 mb-8 rounded bg-gray-800 text-white"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="w-full py-3 mb-8 rounded bg-gray-800 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full py-3 mb-8 rounded bg-gray-800 text-white"
        />
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
