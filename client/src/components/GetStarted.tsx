import { useState } from "react";
import { Navigate } from "react-router-dom";

const GetStarted = () => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="font-Quicksand min-h-screen flex flex-col justify-center items-center">
      <div className="bg-gradient-to-br from-blue-200 via-blue-100 to-gray-100 max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg text-center max-[400px]:rounded-none">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to Your Secure Password Manager
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Safeguard your digital life with our trusted password management
          solution. No more struggling to remember complex passwords.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Our platform ensures your sensitive data is encrypted and easily
          accessible whenever you need it, all in one secure place.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Get started today and take control of your online security. Your peace
          of mind is just a click away.
        </p>
        <button
          onClick={() => setRedirect(true)}
          className="bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
