import roomAPI from "apis/roomAPI";
import useRequest from "hooks/useRequest";
import React from "react";

const Roomcmt = ({ roomId }) => {
  const {
    data: Roomcmt,
    isLoadng,
    error,
  } = useRequest(() => roomAPI.getCommentDetails(roomId));
  if (!Roomcmt) return null;
  console.log(Roomcmt);
  return <div>Roomcmt</div>;
};

export default Roomcmt;
