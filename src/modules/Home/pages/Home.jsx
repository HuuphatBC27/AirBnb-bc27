import Slider from "../components/Slider";
import Trusted from "../Trusted";
import Showroom from "../components/Showroom/";
import SliderSearch from "../components/SliderSearch";
import Explore from "../components/Explore/Explore";
import Services from "../components/services";

const home = () => {
  return (
    <div>
      <Slider />
      <SliderSearch />
      <Trusted />
      <Showroom />
      <Services />
      <Explore />
    </div>
  );
};

export default home;
