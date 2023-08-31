import SilkCard from "./SilkCard"
import img from "../assets/1-24-400x533.jpeg";
import img2 from "../assets/3-7-200x300.jpeg"
import img3 from "../assets/1-18-400x533.jpeg"
import img4 from "../assets/1-19-400x533.jpeg"
import img5 from "../assets/1-20-400x533.jpeg"
import img6 from "../assets/1-21-400x533.jpeg"
import img7 from "../assets/1-22-400x533.jpeg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Sliders = () => {
    const settings={
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        speed: 500,
        // autoplaySpeed: 5000,
        cssEase: "linear",
    };
  return (
    <div className=" w-full h-[600px] overflow-hidden z-0">
        <Slider {...settings}>
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
             <SilkCard
        profile={img5}
        text2="Blue stripe white cotten overhead blouse"
        text="Dumark"
        price="$100.00"
        />
             <SilkCard
        profile={img6}
        text2="Blue stripe white cotten overhead blouse"
        text="Dumark"
        price="$100.00"
        />
               <SilkCard
        profile={img7}
        text2="Blue stripe white cotten overhead blouse"
        text="Dumark"
        price="$100.00"
        />
        </Slider>
    </div>
  )
}

export default Sliders