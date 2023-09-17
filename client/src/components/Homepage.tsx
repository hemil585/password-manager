import { useState } from "react";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";

const Homepage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-center items-start w-full h-screen py-16">
        <form className="">
          <div className="flex flex-col">
            <input
              type="text"
              className="border px-1 h-9 rounded-md"
              placeholder="Sitename"
            />
            {showPassword ? (
              <div className="relative">
                <AiTwotoneEyeInvisible
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-1 top-4 text-2xl cursor-pointer hover:text-blue-500"
                />
                <input
                  type="text"
                  className="border my-3 px-1 h-9 rounded-md"
                  placeholder="Password"
                />
              </div>
            ) : (
              <div className="relative">
                <AiFillEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-1 top-4 text-2xl cursor-pointer hover:text-blue-500"
                />
                <input
                  type="password"
                  className="border my-3 px-1 h-9 rounded-md"
                  placeholder="Password"
                />
              </div>
            )}
            <button className="bg-gray-400 h-9 rounded-md hover:bg-black hover:text-white font-bold uppercase transition-all duration-300">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Homepage;
