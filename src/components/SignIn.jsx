import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { auth, provider,providerGithub } from "../firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import { GoogleButton } from "react-google-button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        setError(<p className="text-white pl-4">Invalid Email / Password</p>);
      });
  };

  const signIn2 = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
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
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    // const user = result.user;
    // ...
    navigate("/home");
  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GithubAuthProvider.credentialFromError(error);
    // ...
    setError(<p className="text-white pl-4">Please input your details</p>);
  });
  };

  return (
    <div className="bg-red-700 text-white">
      <div className="text-center text-xl">Create Your Account</div>
      <form onSubmit={signIn}>
        {error}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your Email"
          className="flex block my-4 mr-auto ml-auto w-full p-4 text-blue-600"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your Password"
          className="flex block my-4 mr-auto ml-auto w-full p-4 text-blue-600"
        />
        <div className="border-[1px] border-gray-100 p-4 mt-4">
          <form onClick={signIn2}>
            <button type="submit" className="flex justify-center w-full">
              <p>Signin with Google</p>{" "}
              <img
                src="assets/img/google.png"
                alt=""
                className="border-2 border-white w-8 ml-4"
              />
            </button>
          </form>
        </div>
        <div className="border-[1px] border-gray-100 p-4 mt-2">
          <form onClick={signIn3}>
          <button type="submit" className="flex justify-center w-full">
            <p>Signin with Github</p>{" "}
            <img
              src="assets/img/github.png"
              alt=""
              className="border-2 border-white w-8 ml-4"
            />
          </button>
          </form>
        </div>
        <button
          type="submit"
          className="bg-blue-500 p-4 mt-2 border border-none flex w-full justify-center mr-auto ml-auto"
        >
          Log in
        </button>
        <div className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/" className="">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
