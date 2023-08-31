import SilkCard from "./SilkCard"
import img from "../assets/1-24-400x533.jpeg";
import img2 from "../assets/3-7-200x300.jpeg"
import img3 from "../assets/1-18-400x533.jpeg"
import img4 from "../assets/1-19-400x533.jpeg"


const Week = () => {
  return (
    <div className="w-full h-[600px] flex">
        <SilkCard
        profile={img}
        text2="Blue stripe white cotten overhead blouse"
        text="Dumark"
        price="$100.00"
        />
           <SilkCard
        profile={img2}
        text2="Blue stripe white cotten overhead blouse"
        text="Dumark"
        price="$100.00"
        />
           <SilkCard
        profile={img3}
        text2="Blue stripe white cotten overhead blouse"
        text="Dumark"
        price="$100.00"
        />
             <SilkCard
        profile={img4}
        text2="Blue stripe white cotten overhead blouse"
        text="Dumark"
        price="$100.00"
        />
    </div>
  )
}

export default Week