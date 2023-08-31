import img from "../assets/1-24-400x533.jpeg";
import { MdOutlineVisibility } from "react-icons/md";
import {FiShoppingBag} from "react-icons/fi"

const MainPages = () => {
  return (
 <div className="w-full h-[100vh]">
     <div className="flex justify-center ml-4 flex-wrap">
      <div className="w-[250px] h-[300px] bg-red-600 m-2 border rounded-md relative">
        <div className="w-full h-[300px]">
          <img src={img} alt="" className="w-full h-[300px] object-cover" />
          <div className="w-full justify-center flex absolute bottom-0 pb-3 opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.2)] transition-all duration-500 h-[300px] items-end">
          <div className="w-[30px] h-[30px] rounded-[50%] bg-white  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] shadow-md hover:text-white duration-300 transition-all ">
            <MdOutlineVisibility />
          </div>
          <div  className="w-[30px] h-[30px] rounded-[50%] bg-white ml-3  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-300 transition-all shadow-md"
                  >
              <FiShoppingBag />
                 </div>
        </div>

        </div>
        <div className="w-full h-[100px] pl-[5px]">
          <div className="font-semibold text-[20px] mb-1">rating</div>
          <div className="font-semibold text-[20px] mb-1 leading-0">title</div>
          <div className="flex">
          <div className="font-bold text-[15px] line-through mr-3">$140.00</div>
          <div className="font-bold text-[15px]">$140.00</div>
          </div>
       
        </div>
      </div>
    </div>
 </div> 
  );
};

export default MainPages;



