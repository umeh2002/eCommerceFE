import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import {addToCart, remove, removeQty} from "../Global/GlobalState"
import { useDispatch, useSelector } from "react-redux";

const CheckOut = () => {
  const cart = useSelector((state:any)=>state.cart)
  const dispatch =useDispatch()
  const [state, setState]= useState<number>(0)
  const change = (numb: number) => {
    const w = numb.toString();
    const x = w.split(".");
    x[0] = x[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return x.join(".");
  };

  return (
    <div>
   {cart.length===0 ?(
    <div className="w-full h-[100vh] flex justify-center items-center
    text-[20px]">Please kindly go back home to purchase a goods</div>
  ):(
    <div className="mx-3 ml-6 ">

    <div className="text-[20px] font-semibold pt-[10px]">Your cart items</div>
    <br />
    <br />
    <br />
    <div className="flex items-center w-full">
      <div className="w-[400px]  ">Product</div>
      <div className="w-[170px]  ">Price</div>
      <div className="w-[170px]   ">Qty</div>
      <div className="w-[170px]  ">SubTotal</div>
      <div className="w-[170px]  ">Removal</div>
    </div>
    <br />
    <hr />
    <br />
   {
    cart?.map((props:any)=>(
      <div className="ml-4" key={props.id}>
      <div className="flex items-center w-full">
        <div className="w-[400px] flex items-center ">
          <img
            className="w-[100px] h-[100px] object-cover mr-4 mt-4 "
            src={props.image}
          />
          <div>{props.tile}</div>
        </div>
        <div className="w-[170px] font-bold ">₦{change(props.cost)}</div>
        <div className="w-[170px]  ">
          <div className="flex  border w-[100px] h-[40px] justify-between items-center px-2 cursor-pointer">
            <button
             className="text-[25px]"
             onClick={() => {
               dispatch(removeQty(props));
             }}
            >-</button>
            <div>{props.qty}</div>
            <button 
            onClick={()=>{
              dispatch(addToCart(props))
            }}
            >+</button>
          </div>
        </div>
        <div className="w-[170px]  ">₦ {change(props.qty * props.cost)}</div>
        <div className="w-[170px]  ">
          <AiOutlineClose className="text-[20px] hover:cursor-pointer transition-all duration-300" 
            onClick={() => {
              dispatch(remove(props));
            }}
          />
        </div>
      </div>
      <br />
      <hr />
    </div>
    ))
   }

    <br />
    <br />

    <div className="w-full border-2 border-slate-300 rounded-md p-4 ">
      <div className="text-[25px] mb-8">Cart Total</div>
      <div className="flex justify-between items-center mb-4">
        <div>SubTotal</div>
        <div>₦2000</div>
      </div>
      <hr />
      <div className="flex mt-4">
        <div>Shipping</div>
        <div>
          <div className="flex ml-12 ">
            <input type="radio" className="mr-2" value={500} />
            <div>Flat rate: ₦500</div>
          </div>
          <div className="flex ml-12 mb-4">
            <input type="radio" className="mr-2" value={200} />
            <div>Local Pickup: ₦200</div>
          </div>
          <div className="flex ml-12 text-[13px] italic text-[#a5a5a5] ">
            Shipping options will be updated during checkout.
          </div>
          <div className="flex ml-12 items-center my-2 ">
            <FaShippingFast />
            <div className="ml-2 text-[14px]  ">CALCULATE SHIPPING</div>
          </div>
        </div>
      </div>
      <hr />

      <div className="flex justify-between items-center my-4">
        <div>Total</div>
        <div>₦59000</div>
      </div>

      <button
        className="w-full h-[50px] rounded-[30px] bg-slate-500 text-white
      hover:bg-slate-500 duration-300 transition-all text-[20px]
      "
        // onClick={() => {
        //   console.log(stateResult);
        //   setToggle(true);
        //   payForProduct(stateResult)
        //     .then((res) => {
        //       setStateURL(res.authorization_url);
        //     })
        //     .then(() => {
        //       setToggle(false);
        //     });
        // }}
      >
        Check Out
      </button>
    </div>
  </div>
  )
  }
  </div>
  );
};

export default CheckOut;
