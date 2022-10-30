import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Showroom from "../components/Showroom/";
import SliderSearch from "../components/SliderSearch";
const home = () => {
  return (
    <div>
      <Slider />
      <SliderSearch />
      <Banner />
      <Showroom />
    </div>
  );
};

export default home;
