import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getBanners } from "../../slices/bannerSlices";

import useRequest from "hooks/useRequest";
import roomAPI from "apis/roomAPI";

const Banner = () => {
  //   const dispatch = useDispatch();
  //   const { banners, isLoading, error } = useSelector((state) => state.banner);

  //   useEffect(() => {
  //     dispatch(getBanners());
  //   }, []);

  const {
    data: banners,
    isLoading,
    error,
  } = useRequest(() => roomAPI.getRooms());

  return (
    <div>
      {banners?.map((banner) => {
        return (
          <div className="  container ">
            <div className="row ">
              <img
                key={banner.id}
                src={banner.hinhAnh}
                alt={`banner-${banner.maBanner}`}
                width="100px  "
                height="100px"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
