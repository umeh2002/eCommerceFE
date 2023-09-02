import { MdOutlineVisibility } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { useProduct } from "../hook/Product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Global/GlobalState";
import Detailed from "./Detailed";
import { useState } from "react";

const MainPages = () => {

  const [state, setState] = useState<boolean>(false);
  const [propsState, setPropsState] = useState<{}>({} as any);
  const dispatch = useDispatch();
  const { data, isLoading } = useProduct();
  const cart = useSelector((state: any) => state.cart);
  console.log(cart);
  const rand = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const change = (numb: number) => {
    const w = numb.toString();
    const x = w.split(".");
    x[0] = x[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return x.join(".");
  };

  return (
    <div className="w-full h-[100vh]">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="flex justify-center ml-4  flex-wrap">
          {data?.map((props: any) => (
            <div className="w-[250px] h-[300px] bg-red-600 m-2 mb-[100px] border rounded-md relative" key={props.id}>
              <div className="w-full h-[300px] relative mr-2">
                <img
                  src={props.image}
                  alt=""
                  className="w-full h-[300px] object-cover"
                />
                <div className="w-full justify-center flex absolute bottom-0 pb-3 opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.2)] transition-all duration-500 h-[300px] items-end">
                  <div className="w-[30px] h-[30px] rounded-[50%] bg-white  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] shadow-md hover:text-white duration-300 transition-all ">
                    <MdOutlineVisibility 
                       onClick={() => {
                        setPropsState(props);
                        setState(true);
                      }}
                    />
                  </div>
                  <div
                    className="w-[30px] h-[30px] rounded-[50%] bg-white ml-3  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-300 transition-all shadow-md"
                    onClick={() => {
                      dispatch(addToCart(props));
                    }}
                  >
                    <FiShoppingBag />
                  </div>
                </div>
              </div>
              <div className="w-full h-[100px] pl-[5px]">
                <div className="font-semibold text-[20px] mb-1">
                  {props.rate}
                </div>
                <div className="font-semibold text-[20px] mb-1 leading-0">
                  {props.title}
                </div>
                <div className="flex">
                  <div className="font-bold text-[15px] text-red-400 line-through mr-3">
                    ₦{change(props.cost + rand(2500, 1200))}
                  </div>
                  <div className="font-bold text-[15px]">
                    ₦{change(props.cost)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
     {
      state && (
        <div className="fixed top-0 left-0 duration-300 transition-all">
        <Detailed props={propsState} setState={setState}/>
      </div>
      )
     }
    
    </div>
  );
};

export default MainPages;
