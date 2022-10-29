import { useNavigate } from "react-router-dom";

import useRequest from "hooks/useRequest";
import roomAPI from "apis/roomAPI";

const ShowRoom = () => {
  // useNavigate là một hook dùng để điều hướng url
  const navigate = useNavigate();

  const {
    data: rooms,
    isLoading,
    error,
  } = useRequest(() => roomAPI.getRooms());

  const goToRoom = (roomId) => {
    navigate(`/room/${roomId}`);
  };

  return (
    <ul>
      {rooms?.map((room) => {
        return (
          <li key={room.id}>
            <span>{room.tenPhong}</span>
            {/* <button> chi tiết</button> */}
            <button onClick={() => goToRoom(room.id)}>Chi tiết</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ShowRoom;
