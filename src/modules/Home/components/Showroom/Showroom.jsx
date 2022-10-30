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
          <div>
            <div className="  container ">
              <div className="row ">
                <img
                  key={room.id}
                  src={room.hinhAnh}
                  alt={`banner-${room.maBanner}`}
                  width="100px  "
                  height="100px"
                />
              </div>
            </div>

            <li key={room.id}>
              <span>{room.tenPhong}</span>

              <button onClick={() => goToRoom(room.id)}>Chi tiết</button>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default ShowRoom;
