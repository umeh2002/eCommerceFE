import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scroll, setScroll] =useState<boolean>(false)
  const onScroll = () =>{
    if (window.scrollY>=70) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener("scroll", onScroll)
  return (
   <div>
 {
  scroll ? ( <div className="w-full h-[70px] flex justify-center items-center border-b-2 fixed z-[10000px] bg-white"
  style={{ boxShadow: "rgba(255, 255, 255, 1)0px 3px 1px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}
  >
  <div className="w-[90%] h-full flex justify-between items-center">
    <div className="text-[30px] font-bold">HEMA</div>
    <div className="flex justify-center items-center">
      <nav className="ml-[20px] text-[18px] hover:cursor-pointer duration-300 transition-all font-semibold">
        Home
      </nav>
      <nav className="ml-[20px] text-[18px] hover:cursor-pointer duration-300 transition-all font-semibold">
       Products
      </nav>
      <nav className="ml-[20px] text-[18px] hover:cursor-pointer duration-300 transition-all font-semibold">
       Blog
      </nav>
      <nav className="ml-[20px] text-[18px] hover:cursor-pointer duration-300 transition-all font-semibold">
        Pages
      </nav>
    </div>
    <Link to="/register">
    <button className="w-[120px] h-[40px] flex justify-center items-center rounded hover:cursor-pointer
    duration-300 transition-all bg-[#2F415D] text-white">Sign up</button>
    </Link>
  </div>
</div>) :( <div className="w-full h-[70px] flex justify-center items-center border-b-2">
  <div className="w-[90%] h-full flex justify-between items-center">
    <div className="text-[30px] font-bold">HEMA</div>
    <div className="flex justify-center items-center">
      <nav className="ml-[20px] text-[18px] hover:cursor-pointer duration-300 transition-all font-semibold">
        Home
      </nav>
      <nav className="ml-[20px] text-[18px] hover:cursor-pointer duration-300 transition-all font-semibold">
       Products
      </nav>
      <nav className="ml-[20px] text-[18px] hover:cursor-pointer duration-300 transition-all font-semibold">
       Blog
      </nav>
      <nav className="ml-[20px] text-[18px] hover:cursor-pointer duration-300 transition-all font-semibold">
        Pages
      </nav>
    </div>
    <Link to="/register">
    <button className="w-[120px] h-[40px] flex justify-center items-center rounded hover:cursor-pointer
    duration-300 transition-all bg-[#2F415D] text-white">Sign up</button>
    </Link>
  </div>
</div>)
 }
   </div>
  );
};

export default Header;
