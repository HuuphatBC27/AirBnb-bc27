import Slider from "../components/Slider";
import Trusted from "../Trusted";
import Showroom from "../components/Showroom/";
import SliderSearch from "../components/SliderSearch";
import Explore from "../Explore/Explore";
import Services from "../components/services";
import Contact from "../components/Contact";
const home = () => {
  return (
    <div>
      <Slider />
      <SliderSearch />
      <Trusted />
      <Showroom />
      <Services />
      <Explore />
      <Contact />
    </div>
  );
};

export default home;
