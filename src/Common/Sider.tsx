import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiHomeAlt2, BiLogOut } from "react-icons/bi";

const Sider = () => {
  return (
    <div className="h-[100vh] w-[200px] bg-slate-300 text-black fixed">
      <div className="p-[10px] ">
        <div className="font-bold text-[30px] mb-[20px]">Hema</div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex mt-[30px] items-center mb-[20px]">
          <div className="relative">
          <div className="absolute w-[16px] h-[16px] rounded-[50%] bg-red-500 text-[10px] flex justify-center items-center text-white right-1 ">
                  1
                </div>
            <AiOutlineShoppingCart className="text-[30px] mr-2 hover:cursor-pointer duration-300 transition-all" />
          </div>
          <div className="text-[20px] font-medium hover:cursor-pointer duration-300 transition-all">
            Cart
          </div>
        </div>

        <div className=" flex items-center ">
          <div>
            <BiHomeAlt2 className="text-[30px] mr-2 hover:cursor-pointer duration-300 transition-all" />
          </div>
          <div className="text-[20px] font-medium hover:cursor-pointer duration-300 transition-all">
            Home
          </div>
        </div>
        <div className="flex items-end mt-[300px]">
            <div>
                <BiLogOut className="text-[30px] hover:cursor-pointer duration-300 transition-all"/>
            </div>
            <div className="text-[20px] font-bold hover:cursor-pointer duration-300 transition-all">Log out</div>
        </div>
      </div>
    </div>
  );
};

export default Sider;
