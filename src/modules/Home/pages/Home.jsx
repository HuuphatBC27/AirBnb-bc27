import Slider from "../components/Slider";
import Trusted from "../Trusted";
import Showroom from "../components/Showroom/";
import SliderSearch from "../components/SliderSearch";
import Explore from "../Explore/Explore";
const home = () => {
  return (
    <div>
      <Slider />
      <SliderSearch />
      <Trusted />
      <Showroom />
      <Explore />
    </div>
  );
};

export default home;
