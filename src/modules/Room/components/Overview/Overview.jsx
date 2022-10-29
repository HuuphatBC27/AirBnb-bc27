import React from "react";

import useRequest from "hooks/useRequest";
import roomAPI from "apis/roomAPI";
const Overview = ({ roomId }) => {
  const {
    data: room,
    isLoading,
    error,
  } = useRequest(() => roomAPI.getRoomDetails(roomId));
  if (!room) {
    return null;
  }
  return (
    <div>
      <h1>{room.tenPhong}</h1>
      <img src={room.hinhAnh} />
      <h2>{room.moTa}</h2>
    </div>
  );
};

export default Overview;
