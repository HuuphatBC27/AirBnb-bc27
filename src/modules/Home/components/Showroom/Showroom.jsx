import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
          <div className="container align-items-center p-5">
            {" "}
            <Card style={{ width: "100%" }} key={room.id}>
              <Card.Img variant="top" src={room.hinhAnh} />
              <Card.Body>
                <Card.Title>{room.tenPhong}</Card.Title>
                <Card.Text>{room.moTa}</Card.Text>
                <Button variant="primary" onClick={() => goToRoom(room.id)}>
                  chi tiết
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </ul>
  );
};

export default ShowRoom;
