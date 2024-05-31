
import { FaqSimple } from "../components/FaqSimple";
import { HeroImageBackground } from "../components/HeroBackgroundImage";
import AboutUs from "./AboutUs";
import JoinUs from "./JoinUs";
import OurVision from "./OurVision";

const HomePage = () => {
  return (
    <>
      
      <HeroImageBackground/>
      <AboutUs/>
      <OurVision/>
      <JoinUs/>
      <FaqSimple/>
    </>
  );
};

export default HomePage;
