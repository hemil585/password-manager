import { BsFillKeyFill } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-blue-100 w-full h-20 flex justify-between items-center px-5 max-[370px]:px-1">
      <div className="flex items-center gap-5 max-[570px]:gap-1">
        <div className="text-blue-500">
          <BsFillKeyFill size={"3rem"} />
        </div>
        <h3 className="text-3xl max-[570px]:text-xl  max-[370px]:">Password Manager</h3>
      </div>

      <div>
        <BiSolidUserCircle size={"4rem"} className="text-blue-500 cursor-pointer hover:text-blue-800 " />
      </div>
    </div>
  );
};

export default Navbar;
