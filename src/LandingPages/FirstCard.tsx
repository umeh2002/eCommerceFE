import img from "../assets/zenuro-jeans.jpg"
import img1 from "../assets/home-9-1.jpeg (1).webp"
import img2 from "../assets/home-10-2.jpg"

const FirstCard = () => {
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
        <div className="w-[90%] h-full flex justify-between items-center">
<div className="w-[350px] h-[300px] rounded-[20px] hover:cursor-pointer flex-col" >
  <div className="w-full h-[250px] ">
    <img src={img1} alt="" />
  </div>
  <div className=" text-[20px] font-medium">
    you can't resist them
  </div>
</div>
<div className="w-[350px] h-[300px] rounded-[20px] hover:cursor-pointer">
  <div className="w-full h-[250px]">
    <img src={img2} alt="" />
  </div>
  <div className="text-white text-[20px] font-medium ml-[20px]">Comfort all around</div>
</div>
<div className="w-[350px] h-[300px] rounded-[20px] hover:cursor-pointer">
  <div className="w-full h-[250px] ">
    <img src={img} alt="" />
  </div>
  <div className="text-white text-[20px] font-medium ml-[20px]">
A new dose of adrenaline</div>
</div>
        </div>
    </div>
  )
}

export default FirstCard