import {
  signInWithEmailAndPassword,
  signInWithPopup,
  // GoogleAuthProvider,
  // GithubAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { auth, provider, providerGithub } from "../firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [error, setError] = useState("");
  let navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        navigate("/home");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(<p className="text-red-400 pl-4">Invalid Email / Password</p>);
      });
  };

  const signIn2 = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // ...
        navigate("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        setError(<p className="text-white pl-4">Please input your details</p>);
      });
  };

  const signIn3 = (e) => {
    e.preventDefault();
    signInWithPopup(auth, providerGithub)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        // const credential = GithubAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // The signed-in user info.
        // const user = result.user;
        // ...
        navigate("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GithubAuthProvider.credentialFromError(error);
        // ...
        setError(
          <p className="text-red-400 pl-4">Please input your details</p>
        );
      });
  };

  return (
    <div className="bg-blue-400 p-4 h-screen my-auto flex items-center">
      <div className="bg-gray-200 text-white w-full flex md:max-w-[700px] mx-auto">
        <div
          className="hidden  w-[50%] bg-indigo-400 md:block"
          id="left-container"
        >
          {/* <img src="assets/img/img2.png" alt="" /> */}
        </div>

        <div className="w-full md:w-[50%]">
          <div className="text-blue-600 font-black py-4 text-center text-xl">
            Sign In Your Account
          </div>
          <form onSubmit={signIn}>
            {error}
            <div className="text-gray-300 bg-white my-2 flex justify-between border-2 border-blue-200">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your Email"
                className="flex block p-4 w-[100%] text-blue-600 border-1 border-white"
              />
              <span className="flex items-center mr-4">
                <HiAtSymbol size={25} className="items-center cursor-pointer" />
              </span>
            </div>
            <div className="text-gray-300 bg-white my-2 flex justify-between border-2 border-blue-200">
              <input
                type={`${show ? "text" : "password"}`}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter your Password"
                className="flex block p-4 w-[100%] text-blue-600"
              />
              <span className="flex items-center mr-4">
                <HiFingerPrint
                  size={25}
                  className="items-center cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              </span>
            </div>
            <div className="border-[1px] border-blue-300 bg-blue-300 p-4 mt-4">
              <form onClick={signIn2}>
                <button type="submit" className="flex justify-center w-full">
                  <p>Signin with Google</p>{" "}
                  <img
                    src="assets/img/google.png"
                    alt=""
                    className="w-8 ml-4"
                  />
                </button>
              </form>
            </div>
            <div className="border-[1px] border-blue-300 bg-blue-300 p-4 mt-4">
              <form onClick={signIn3}>
                <button type="submit" className="flex justify-center w-full">
                  <p>Signin with Github</p>{" "}
                  <img
                    src="assets/img/github.png"
                    alt=""
                    className="w-8 ml-4"
                  />
                </button>
              </form>
            </div>
            <button
              type="submit"
              className="bg-blue-500 my-4 p-4 border border-none flex w-full justify-center mr-auto ml-auto"
            >
              Log in
            </button>
            <div className="pt-0 pb-4 text-center text-blue-400">
              Don't have an account?{" "}
              <Link to="/" className="">
                <span className="font-black text-[16px] cursor-pointer hover:text-red-400">
                  Sign Up
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
