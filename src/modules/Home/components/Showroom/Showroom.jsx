// import { useNavigate } from "react-router-dom";

import useRequest from "hooks/useRequest";
import roomAPI from "apis/roomAPI";

const MovieShowing = () => {
  // useNavigate là một hook dùng để điều hướng url
  // const navigate = useNavigate();

  const {
    data: rooms,
    isLoading,
    error,
  } = useRequest(() => roomAPI.getRooms());

  // const goToMovie = (movieId) => {
  //   navigate(`/movie/${movieId}`);
  // };

  return (
    <ul>
      {rooms?.map((room) => {
        return (
          <li key={room.id}>
            <span>{room.tenPhong}</span>
            <button> chi tiết</button>
            {/* <button onClick={() => goToMovie(movie.maPhim)}>Chi tiết</button> */}
          </li>
        );
      })}
    </ul>
  );
};

export default MovieShowing;
