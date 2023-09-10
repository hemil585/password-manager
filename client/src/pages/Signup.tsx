import { Link } from "react-router-dom"

const Signup:React.FC = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center font-Ubuntu max-[750px]:h-[60dvh] max-[750px]:p-2">
      <div className="bg-gradient-to-t from-cyan-100 via-blue-200 to-blue-300 w-[50%] h-auto p-10 shadow-lg shadow-slate-400 max-[750px]:w-[100%] max-[750px]:shadow-none max-[750px]:mt-36 max-[500px]:p-5 rounded-lg">
        <p className="my-5 text-center text-2xl">Create Account</p>
        <div className="my-2 flex flex-col justify-center items-center">
          <input
            className="my-3 w-full h-10 border-2 px-2 rounded-md"
            type="text"
            placeholder="Email"
          />
          <input
            className="my-1 w-full h-10 border-2 px-2 rounded-md"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="flex w-full h-10 bg-blue-500 justify-center items-center text-white text-2xl uppercase hover:bg-blue-700 cursor-pointer rounded-sm my-5 transition-all duration-300">
          Login{" "}
          <span className="ml-2">
          </span>{" "}
        </button>
        <p className="text-center">
          Already have an account?
          <Link to={"/login"}>
            <span className="text-blue-500 cursor-pointer ml-2 hover:text-blue-600">Login</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup