import roomAPI from "apis/roomAPI";
import React from "react";
import useRequest from "hooks/useRequest";

const RoomAddress = ({ roomId }) => {
  const {
    data: RoomAddress,
    isLoading,
    error,
  } = useRequest(() => roomAPI.getRoomAddressDetails(roomId));
  if (!RoomAddress) return null;
  console.log(RoomAddress);
  return (
    <div>
      <h1>{RoomAddress.tenViTri}</h1>
    </div>
  );
};

export default RoomAddress;
