import React from "react";
import { useParams } from "react-router-dom";

import Overview from "../components/Overview";
import Roomcmt from "../components/Roomcmt";
import Roomdetails from "../components/Roomdetails";
const Room = () => {
  // useParams  : hook để lấy giá trị động (param) trên URL

  const { roomId } = useParams();
  console.log(roomId);

  return (
    <div>
      <Overview roomId={roomId} />
      <Roomcmt roomId={roomId} />
    </div>
  );
};

export default Room;
