

interface iCard {
  text?: string;
  text2?: string;
  profile?: string;
  price?: string;
}

const SilkCard: React.FC<iCard> = ({ text, text2, profile, price }) => {
  return (
    <div className=" w-full h-[600px] bg-[#F9FAFA]">
  
      <div
        className="w-[300px] h-[500px]  hover:cursor-pointer duration-300 transition-all flex flex-col pt-[50px]">
        <img src={profile} alt="" className="w-full h-[400px] object-cover" />
        <div className="w-full h-[100px]">
          <div className="text-[15px] font-medium mb-2">{text}</div>
          <div className="text-[16px] font-semibold mb-2">{text2}</div>
          <div className="font-bold">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default SilkCard;
