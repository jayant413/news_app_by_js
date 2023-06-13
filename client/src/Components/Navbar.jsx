import { Link } from "react-router-dom";
import { Close, Menu, AccountCircle, Phone } from "@mui/icons-material";
import React, { useContext } from "react";
import { Context } from "../App";

const Navbar = () => {
  const { category, leftBar, setLeftBar } = useContext(Context);
  const leftBarToggle = () => {
    setLeftBar(!leftBar);
  };

  return (
    <div className="sticky z-40 top-0">
      {/* leftNav */}
      <div className="flex items-center justify-start py-3 px-3  bg-slate-700 ">
        <div
          className="text-white/70 text-xl flex items-center justify-center "
          onClick={leftBarToggle}
        >
          {leftBar ? (
            <Close className="bg-transparent " />
          ) : (
            <Menu className="bg-transparent " />
          )}
        </div>
        <span className="flex items-center justify-center pt-2pb-2 text-3xl font-mono font-semibold text-gray-400 cursor-default ml-9">
          News-App {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>

        {/* rightNav */}

        {/* <div className='flex flex-row items-center justify-center'>
              <Link to="/about" className='flex flex-row text-white/50 hover:text-white cursor-pointer mx-2' >
                <span ><AccountCircle/></span>
                <span >About</span>
              </Link>
              <Link to="/contact" className='flex flex-row text-white/50 hover:text-white cursor-pointer mx-2' >
                <span ><Phone/></span>
                <span >Contact Us</span>
              </Link>
   
        </div> */}
      </div>

      <hr className="border-solid border-[1px] border-blue-500" />
    </div>
  );
};

export default Navbar;
