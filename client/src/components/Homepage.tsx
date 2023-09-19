import { useEffect, useState } from "react";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { useParams } from "react-router-dom";

type UserInfo = {
  _id: string;
  sitename: string;
  password: string;
};

const Homepage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [sitename, setSitename] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [userInfos, setUserInfos] = useState<UserInfo[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(`http://localhost:7575/info/${id}`, {
        method: "GET",
      });
      const data = await response.json();
      const extractedData = data.map((item: UserInfo) => ({
        _id: item._id,
        sitename: item.sitename,
        password: item.password,
      }));
      setUserInfos(extractedData);
    };
    getInfo();
  }, [sitename]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sitename && password) {
      if (sitename.length > 0 && password.length > 0) {
        console.log("bjbcdjc: ", sitename, password);
        const response = await fetch(`http://localhost:7575/info/${id}`, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
          body: JSON.stringify({ sitename, password }),
        });

        if (!response.ok) {
          const error = await response.json();
          console.log(error);
        } else {
          const res = await response.json();
          console.log(res);
          setSitename("");
          setPassword("");
        }
      }
    }
  };

  const copyPassword = (id: string) => {
    if (id) {
      const info = userInfos.find((item) => item._id === id);
      if (info) {
        navigator.clipboard.writeText(info.password);
        alert(`Password copied successfully! 🙂`);
      }
    }
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
              maxLength={17}
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
            <button className="bg-gray-400 h-9 rounded-md hover:bg-black hover:text-white font-bold uppercase transition-all duration-300">
              Save
            </button>
          </div>
        </form>
        <div className="mt-14 w-auto">
          <ul>
            {userInfos.map((userInfo) => (
              <div>
                <li
                  key={userInfo._id}
                  className="w-[19rem] px-64 max-[615px]:px-52 max-[500px]:px-16 max-[500px]:text-xl my-3 flex justify-center items-center h-10 font-Quicksand text-2xl border border-3 border-zinc-800 rounded-full bg-white-500 transition-all duration-300 hover:bg-black hover:text-white cursor-pointer"
                  onClick={() => copyPassword(userInfo._id)}
                >
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
