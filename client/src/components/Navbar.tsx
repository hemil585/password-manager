import { BsFillKeyFill } from "react-icons/bs";
import { BiSolidUserCircle, BiSolidUpArrow } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineLogin } from "react-icons/md";
import { HiLogin } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const location = useLocation();
  const path: string = location.pathname;

  const handleProfileToggler = (): void => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="font-Quicksand bg-blue-100 w-full h-20 flex border border-y-blue-950 justify-between items-center px-5 max-[370px]:px-1">
        <div className="flex items-center gap-5 max-[570px]:gap-1">
          <div className="text-blue-500">
            <BsFillKeyFill size={"3rem"} />
          </div>
          <h3 className="text-3xl max-[570px]:text-xl  max-[370px]:">
            Password Manager
          </h3>
        </div>
        {path === "/homepage" && (
          <div className="relative flex">
            <BiSolidUserCircle
              size={"4rem"}
              onClick={() => handleProfileToggler()}
              className="text-blue-500 cursor-pointer hover:text-blue-800 transition-all duration-300"
            />
            {toggle ? (
              <BiSolidUpArrow
                onClick={() => handleProfileToggler()}
                className="absolute bottom-0 right-[-.5rem] flex justify-end items-end cursor-pointer hover:text-blue-900"
                size={"1.5rem"}
              />
            ) : (
              <IoMdArrowDropdown
                onClick={() => handleProfileToggler()}
                className="absolute bottom-0 right-[-1rem] flex justify-end items-end cursor-pointer hover:text-blue-900 max-[370px]:right-[-.5rem] max-[370px]:top-[2.5rem] max-[370px]:text-[1rem]"
                size={"2rem"}
              />
            )}
          </div>
        )}
      </div>
      {toggle && (
        <div className="absolute w-full flex justify-end items-end pr-6">
          <div className="w-60 h-auto shadow-lg shadow-gray-500 right-0 p-6">
            <p>Welcome, User</p>
            <hr className="my-4" />
            <Link to={"/login"} onClick={() => handleProfileToggler()}>
              <p className="flex justify-start items-center gap-7 cursor-pointer hover:text-blue-500 transition-all duration-300">
                <span>
                  <AiOutlineLogin size={"1.5rem"} />
                </span>{" "}
                Login
              </p>
            </Link>

            <Link to={"/signup"} onClick={() => handleProfileToggler()}>
              <p className="flex justify-start items-center gap-7 my-5 cursor-pointer hover:text-green-500 transition-all duration-300">
                <span>
                  <MdOutlineLogin size={"1.5rem"} />
                </span>{" "}
                Signup
              </p>
            </Link>

            <p className="flex justify-start items-center gap-7 cursor-pointer hover:text-red-600 transition-all duration-300">
              <span>
                <HiLogin size={"1.5rem"} />
              </span>{" "}
              Logout
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
