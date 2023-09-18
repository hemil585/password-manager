import { useState } from "react";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";

type UserInfo = {
  sitename: string;
  password: string;
};

const Homepage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [sitename, setSitename] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userInfos, setUserInfos] = useState<UserInfo[]>([]);

  const onSaveHandler = () => {
    if (sitename.length > 0 && password.length > 0) {
      const newUser = { sitename, password };
      setUserInfos([...userInfos, newUser]);
      setSitename("");
      setPassword("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center w-full h-screen py-16 font-Montserrat">
        <form className="" onSubmit={(e) => onSubmit(e)}>
          <div className="flex flex-col">
            <input
              type="text"
              className="border px-1 h-9 rounded-md"
              placeholder="Sitename"
              value={sitename}
              onChange={(e) => setSitename(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}
            <button
              className="bg-gray-400 h-9 rounded-md hover:bg-black hover:text-white font-bold uppercase transition-all duration-300"
              onClick={() => onSaveHandler()}
            >
              Save
            </button>
          </div>
        </form>
        <div className="mt-14 w-auto">
          <ul>
            {userInfos.map((userInfo, index) => (
              <div>
                <li key={index} className="w-full px-64 max-[615px]:px-52 max-[350px]:px-28 my-3 flex justify-center items-center h-10 font-Quicksand text-2xl border border-3 border-zinc-800 rounded-full bg-white-500 transition-all duration-300 hover:bg-black hover:text-white cursor-pointer" onClick={()=>{console.log('Hello');
                }}>
                  {userInfo.sitename}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Homepage;
