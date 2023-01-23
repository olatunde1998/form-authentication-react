import { createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { HiOutlineUser, HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { auth} from "../firebase";
import { useNavigate } from "react-router";
// import { GoogleButton } from "react-google-button";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [error, setError] = useState("");
  let navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        navigate("/signin");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(<p className="text-white pl-4">Please input your details</p>);
        // ..
      });
  };
  

  return (
    <div className="bg-red-700 text-white">
      <div className="text-center text-xl">Create Your Account</div>
      <form onSubmit={signUp}>
        {error}
        <div className="bg-white flex justify-between border-2 border-blue-400">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            required
            className="flex block p-4 w-[100%] text-blue-600"
          />
          <span className=" flex items-center mr-4">
            <HiOutlineUser size={25} className="text-gray-300" />
          </span>
        </div>
        <div className="bg-white flex justify-between border-2 border-blue-400">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your Email"
            className="flex block p-4 w-[100%] text-blue-600"
          />
          <span className="flex items-center mr-4">
            <HiAtSymbol size={25} className="items-center text-gray-300" />
          </span>
        </div>
        <div className="bg-white flex justify-between border-2 border-blue-400">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your Password"
            className="flex block p-4 w-[100%] text-blue-600"
          />
          <span className="flex items-center mr-4">
            <HiFingerPrint size={25} className="items-center text-gray-300" />
          </span>
        </div>
        <div className="bg-white flex justify-between border-2 border-blue-400">
          <input
            type="password"
            onChange={(e) => setCPassword(e.target.value)}
            value={cPassword}
            placeholder="Enter your Password"
            className="flex block w-[100%] p-4 text-blue-600"
          />
          <span className="flex items-center mr-4">
            <HiAtSymbol size={25} className="items-center text-gray-300" />
          </span>
        </div>
        <button
          type="submit"
          className="bg-blue-500 my-4 p-4 border border-none flex w-full justify-center mr-auto ml-auto"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
