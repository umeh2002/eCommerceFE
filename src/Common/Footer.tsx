import { BiLocationPlus,BiLogoPaypal,BiLogoVisa  } from "react-icons/bi";
import {FaCcMastercard,FaGooglePay,FaApplePay} from "react-icons/fa"
import {SiAliexpress} from "react-icons/si"
const Footer = () => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center flex-col  pt-[30px] mt-[50px] 
    ">
      <div className="w-[90%] h-[50vh] flex justify-between border-b-[4px] border-[#F5F5F5]">
        <div className="">
          <div className="flex">
            <BiLocationPlus className="text-[30px]" />
            <div className="ml-2">
              <div className="font-medium">17 Irving Pl, New York,</div>
              <div className="font-medium">NY 10003</div>
            </div>
          </div>
          <div className="font-light hover:cursor-pointer mt-2">
            care@reytheme.com <br />
            778 568 999{" "}
          </div>
        </div>

        <div>
          <nav className="font-semibold text-[20px] pb-2 hover:cursor-pointer">
            Shop
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Shop
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Collections
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Lookbook
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Women
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Men
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Kids
          </nav>
        </div>
        <div>
          <nav className="font-semibold text-[20px] pb-2 hover:cursor-pointer">
            Help
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Returns & Exchanges
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Privacy Policy
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Terms & Conditions
          </nav>
        </div>
        <div>
          <nav className="font-semibold text-[20px] pb-2 hover:cursor-pointer">
            About
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Journal
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Our story
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[15px] pb-[5px] font-light">
            Contact
          </nav>
        </div>
        <div>
          <nav className="font-bold text-[20px] pb-2 hover:cursor-pointer leading-[1]">
            Get 5% off <br /> your purchase
          </nav>
          <nav className="hover:underline hover:cursor-pointer hover:transition-all text-[13px] pb-[5px] font-light">
            & be the first to know about new arrivals, special offers, in-store{" "}
            <br />
            events and news.
          </nav>
        </div>
      </div> 
      <div className=" w-full flex justify-between h-[20vh] items-center">
          <div className="font-light">© Rey Theme 2023. All rights reserved.</div>
          <div className="flex items-center justify-center w-[600px] h-[40px] font-light">
<BiLogoVisa  className="text-[60px] mr-[20px] hover:cursor-pointer duration-300 transition-all font-light"/>
<SiAliexpress className="text-[60px] mr-[20px] hover:cursor-pointer duration-300 transition-all font-light"/>
<BiLogoPaypal className="text-[40px] mr-[20px] hover:cursor-pointer duration-300 transition-all font-light"/>
<FaCcMastercard className="text-[30px] mr-[20px] hover:cursor-pointer duration-300 transition-all font-light"/>
<FaGooglePay className="text-[60px] mr-[20px] hover:cursor-pointer duration-300 transition-all font-light"/>
<FaApplePay className="text-[60px] mr-[20px] hover:cursor-pointer duration-300 transition-all font-light"/>
          </div>
        </div>
    </div>
  );
};

export default Footer;
