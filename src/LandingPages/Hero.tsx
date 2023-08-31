import img from "../assets/home-5-5.jpg";

const Hero = () => {
  return (
    <div
      className="w-full h-[500px] flex justify-center items-center bg-[#E7E7E7]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-[90%] h-full flex justify-center items-center">
        <div className="w-full h-full flex flex-col justify-center ">
          <div className="font-bold text-[100px] mb-3">
            season<span className="font-bold text-[#000000]">sale</span>
          </div>
          <div className="text-[20px] mb-5 font-medium leading-[1]">
            Enjoy the summer time and shop our SS20 Collection <br /> at up to 50% off,
            for a limited time.
          </div>
          <div className="flex">
            <button
              className="mr-[10px] w-[200px] h-[50px] rounded hover:cursor-pointer border-[1px] hover:bg-white
            duration-300 transition-all flex justify-center items-center bg-inherit border-white"
            >
              Shop for men
            </button>
            <button
              className="w-[200px] h-[50px] rounded hover:cursor-pointer border-[1px] hover:bg-inherit
            duration-300 transition-all flex justify-center items-center bg-white border-white"
            >
              Shop for women
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
