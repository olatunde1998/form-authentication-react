import { Link } from "react-router-dom";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className="text-white bg-red-400 h-screen flex items-center text-center">
      <div className="flex flex-col mx-auto w-[400px]">
        <p className="center mx-auto text-[32px]">
          <Typed
            strings={["Hello, You're Welcome"]}
            typeSpeed={400}
            backSpeed={300}
            loop
          />
        </p>{" "}
        <Link to="/signin">
          <button className="mt-12 p-4 border-2 bg-blue-400 w-[200px] mx-auto">
            Sign Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
