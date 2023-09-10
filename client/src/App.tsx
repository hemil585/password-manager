import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GetStarted from "./components/GetStarted";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
  );
};

export default App;
