import { useDispatch } from "react-redux";
import {AiOutlineClose} from "react-icons/ai"
import { addToCart } from "../Global/GlobalState";

interface iProps {
  props?:any
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Detailed:React.FC<iProps> = ({props, setState}) => {
  const dispatch =useDispatch()
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
    <div className="w-full h-[100vh] flex justify-center items-center bg-[rgba(0,0,0,0.6)] relative ">
      <div className="w-[80%] h-[80%] flex justify-between items-center  bg-white shadow-md rounded- overflow-hidden 
      absolute z-10">
        <img src={props.image} alt="" className="w-[50%] h-full object-cover" />
        <div className="w-[50%] h-full  flex  flex-col pl-[10px]  pt-[10px]">
        <div className="ml-[400px]">
            <AiOutlineClose className="text-[30px] flex justify-end hover:cursor-pointer duration-300 transition-all"
            onClick={()=>{
              setState(false)
            }}
            />
        </div>
          <div className="text-[30px] font-bold mb-4">{props.title}</div>
          <div className="flex mb-4">
            <div className="line-through text-[20px] font-medium mr-2">
            ₦{change(props.cost + rand(2500, 1200))}
            </div>
            <div className="text-[20px] font-semibold"> ₦{change(props.cost)}</div>
          </div>
          <div className="text-[20px] font-medium mb-3">{props.ratings}</div>
          <div className="text-[15px] font-medium leading-[2] mb-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            maxime repellendus fugiat velit illum veritatis molestias nihil quis
            dolor blanditiis distinctio placeat harum veniam, animi,
            accusantium, architecto ad possimus eligendi deserunt est minima.
            Sed temporibus commodi aliquam dolor quo voluptate!
          </div>
          <hr />
          <div className="flex justify-between m-5 items-center">
            <div
              className="flex justify-between items-center h-[40px] w-[80px] border 
           "
            >
              <div className="text-[20px] hover:cursor-pointer   duration-300 transition-all">
                -
              </div>
              <div className="text-[20px]">1</div>
              <div className="text-[20px] hover:cursor-pointer   duration-300 transition-all">
                +
              </div>
            </div>
            <button
              className="w-[150px] h-[50px] rounded-md bg-black text-white hover:cursor-pointer
            hover:bg-purple-500 duration-300 transition-all flex justify-center items-center "
            onClick={()=>{
              dispatch(addToCart(props))
              setState(false)
            }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
