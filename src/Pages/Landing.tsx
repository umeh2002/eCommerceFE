import Hero from "../LandingPages/Hero"
import FirstCard from "../LandingPages/FirstCard"
import TopCollections from "../LandingPages/TopCollections"
import Sliders from "../LandingPages/Silders"
import Small from "../LandingPages/Small"
import Week from "../LandingPages/Week"
import Shop from "../LandingPages/Shop"




const Landing = () => {
  return (
    <div>
        <Hero/>
        <FirstCard />
        <TopCollections />
        <Small />
     <Sliders/>
     <Shop />
     <Week />
    </div>
  )
}

export default Landing