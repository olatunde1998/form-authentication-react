import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { HiOutlineUser, HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import { GoogleButton } from "react-google-button";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirmPassWord, setShowComfirmPassword] = useState(false);

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
        setError(
          <p className="text-red-400 pl-4">Please input your details</p>
        );
        // ..
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
          <div className="text-blue-600 py-4 font-black text-center text-xl">
            Create Your Account
          </div>
          <form onSubmit={signUp}>
            {error}
            <div className="text-gray-300 bg-white my-2 flex justify-between border-2 border-blue-200">
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Username"
                required
                className="flex block p-4 w-[100%] text-blue-600 border-1 border-white"
              />
              <span className=" flex items-center mr-4">
                <HiOutlineUser size={25} className="cursor-pointer" />
              </span>
            </div>
            <div className="text-gray-300 bg-white my-2 flex justify-between border-2 border-blue-200">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your Email"
                className="flex block p-4 w-[100%] text-blue-600"
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
              <span
                className="flex items-center mr-4 "
                onClick={() => setShow(!show)}
              >
                <HiFingerPrint
                  size={25}
                  className="items-center cursor-pointer"
                />
              </span>
            </div>
            <div className="text-gray-300 bg-white my-2 flex justify-between border-2 border-blue-200">
              <input
                type={`${showConfirmPassWord ? "text" : "password"}`}
                onChange={(e) => setCPassword(e.target.value)}
                value={cPassword}
                placeholder="Confirm your Password"
                className="flex block w-[100%] p-4 text-blue-600"
              />
              <span
                className="flex items-center mr-4 "
                onClick={() => setShowComfirmPassword(!showConfirmPassWord)}
              >
                <HiFingerPrint
                  size={25}
                  className="items-center cursor-pointer"
                />
              </span>
            </div>
            <button
              type="submit"
              className="bg-blue-500 my-4 p-4 border border-none flex w-full justify-center mr-auto ml-auto"
            >
              Sign up
            </button>
            <div className="pt-0 pb-4 text-center text-sm text-blue-400">
              Already have an account?{" "}
              <Link to="/signin" className="">
                <span className="font-black text-[16px] cursor-pointer hover:text-red-400">
                  Sign In
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
