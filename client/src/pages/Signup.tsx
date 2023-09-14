import { Link, Navigate } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import { Errors } from "./Types";

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [errors, setErrors] = useState<Errors | null>(null);
  const [redirect, setRedirect] = useState<boolean>(false);

  const onsubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:7575/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ firstname, lastname, email, password }),
    });

    if (response.ok) {
      setRedirect(true);
    } else {
      const errors = await response.json();
      setErrors(errors);
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center font-Ubuntu max-[750px]:h-[60dvh] max-[750px]:p-2">
      <div className="bg-gradient-to-t from-cyan-100 via-blue-200 to-blue-300 w-[50%] h-auto p-10 shadow-lg shadow-slate-400 max-[750px]:w-[100%] max-[750px]:shadow-none max-[750px]:mt-36 max-[500px]:p-5 rounded-lg">
        <p className="my-5 text-center text-2xl">Create Account</p>
        <form onSubmit={(e) => onsubmit(e)}>
          <div className="my-2 flex flex-col">
            <input
              required
              className="my-1 w-full h-10 border-2 px-2 rounded-md"
              type="text"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            {errors?.firstname && (
              <p className="flex items-center text-left mb-2 text-red-500 font-bold text-sm">
                {" "}
                <span className="mr-1">
                  <MdOutlineErrorOutline size={"1rem"} />
                </span>{" "}
                {errors.firstname}
              </p>
            )}

            <input
              className="my-1 w-full h-10 border-2 px-2 rounded-md"
              type="text"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              required
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
              required
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
          <button className="flex w-full h-10 bg-blue-500 justify-center items-center text-white text-2xl uppercase hover:bg-blue-700 cursor-pointer rounded-sm my-5 transition-all duration-300">
            register
            <span className="ml-2"></span>{" "}
          </button>
        </form>
        <p className="text-center">
          Already have an account?
          <Link to={"/login"}>
            <span className="text-blue-500 cursor-pointer ml-2 hover:text-blue-600">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
