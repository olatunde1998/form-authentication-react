import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/" element={<SignUp/>}/>
      </Routes> 
  );
}

export default App;
