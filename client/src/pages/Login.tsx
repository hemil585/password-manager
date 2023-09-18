import { IoMdLogIn } from "react-icons/io";
import { Link, Navigate } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import { Errors } from "./Types";
import { useState } from "react";
import { UserInfo } from "../App";

type LoginProps = {
  getUserInfo: (info: UserInfo) => void;
};

const Login: React.FC<LoginProps> = ({ getUserInfo }) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [errors, setErrors] = useState<Errors | null>(null);
  const [response, setResponse] = useState<{
    _id: string;
    firstname: string;
  }>();
  const [redirect, setRedirect] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:7575/login", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errors = await response.json();
      setErrors(errors);
    } else {
      const res = await response.json();
      setResponse(res);
      getUserInfo(res);
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={`/homepage/${response?._id}`} />;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center font-Ubuntu max-[750px]:h-[60dvh] max-[750px]:p-2">
      <div className="bg-gradient-to-t from-cyan-100 via-blue-200 to-blue-300 w-[50%] h-auto p-10 shadow-lg shadow-slate-400 max-[750px]:w-[100%] max-[750px]:shadow-none max-[750px]:mt-36 max-[500px]:p-5 rounded-lg">
        <form onSubmit={(e) => onSubmit(e)}>
          <p className="my-5 text-center text-2xl">Welcome Back!</p>
          <div className="my-2 flex flex-col">
            <input
              className="my-1 w-full h-10 border-2 px-2 rounded-md"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors?.email && (
              <p className="flex items-center text-left mb-2 text-red-500 font-bold text-sm">
                {" "}
                <span className="mr-1">
                  <MdOutlineErrorOutline size={"1rem"} />
                </span>{" "}
                {errors.email}
              </p>
            )}
            <input
              className="my-1 w-full h-10 border-2 px-2 rounded-md"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors?.password && (
              <p className="flex items-center text-left mb-2 text-red-500 font-bold text-sm">
                {" "}
                <span className="mr-1">
                  <MdOutlineErrorOutline size={"1rem"} />
                </span>{" "}
                {errors.password}
              </p>
            )}
          </div>
          <p className="text-right text-blue-500 cursor-pointer">
            Forget Password?
          </p>
          <button className="flex w-full h-10 bg-blue-500 justify-center items-center text-white text-2xl uppercase hover:bg-blue-700 cursor-pointer rounded-sm my-5 transition-all duration-300">
            Login{" "}
            <span className="ml-2">
              <IoMdLogIn />
            </span>{" "}
          </button>
        </form>
        <p className="text-center">
          Don't have an account?
          <Link to={"/signup"}>
            <span className="text-blue-500 cursor-pointer ml-2 hover:text-blue-600">
              Sign up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
