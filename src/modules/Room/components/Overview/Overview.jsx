import React from "react";
import Card from "react-bootstrap/Card";
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
      {" "}
      <div className="container">
        <img src={room.hinhAnh} />
        <h4>{room.moTa}</h4>
      </div>
      <div className="container pt-3">
        <Card className="text-center ">
          <Card.Title>{room.tenPhong}</Card.Title>
          <Card.Body>
            <Card.Title>{room.giaTien}$ đêm</Card.Title>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
