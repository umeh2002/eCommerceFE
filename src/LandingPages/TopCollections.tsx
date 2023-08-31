

const TopCollections = () => {
  return (
    <div className="w-full h-[100px] flex justify-center items-center">
        <div className="flex justify-between w-[90%]">
            <div className="font-bold text-[30px]">Top collections</div>
            <button className="w-[150px] h-[40px] flex justify-center items-center rounded 
            hover:cursor-pointer duration-300 transition-all border border-black">  SHIRTS</button>
            <button className="w-[150px] h-[40px] flex justify-center items-center rounded
            hover:cursor-pointer duration-300 transition-all border border-black">STAY AT HOME</button>
            <button className="w-[170px] h-[40px] flex justify-center items-center rounded
            hover:cursor-pointer duration-300 transition-all border border-black">SUMMER NEUTARL</button>
            <button className="w-[170px] h-[40px] flex justify-center items-center rounded
            hover:cursor-pointer duration-300 transition-all border border-black">BACK IN STOCKS</button>
            <button className="w-[170px] h-[40px] flex justify-center items-center rounded
            hover:cursor-pointer duration-300 transition-all border border-black">SUMMER DRESSES</button>
        </div>
    </div>
  )
}

export default TopCollections