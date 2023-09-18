import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GetStarted from "./components/GetStarted";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export type UserInfo = {
  _id: string;
  firstname: string;
};

const App = () => {
  const [info, setInfo] = useState<UserInfo | null>(null);

  const getUserInfo = (info: UserInfo): void => {
    setInfo(info);
  };

  return (
    <>
      {info && <Navbar info={info} />}
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/homepage/:id" element={<Homepage />} />
        <Route path="/login" element={<Login getUserInfo={getUserInfo} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
