import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="bg-blue-800 border-4 border-blue-800 p-4">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
      {/* <SignUp/> */}
     
    </div>
  );
}

export default App;
