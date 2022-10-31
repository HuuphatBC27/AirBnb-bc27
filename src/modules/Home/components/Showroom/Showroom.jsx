import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import CardGroup from "react-bootstrap/CardGroup";
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
    <div>
      <h1> 1 số nơi nổi bật</h1>
      <ul>
        {rooms.slice(0, 3)?.map((room) => {
          return (
            <div className="container">
              <CardGroup className=" pt-5">
                <Card>
                  <Card.Img variant="top" src={room.hinhAnh} />
                  <Card.Body>
                    <Card.Title>{room.tenPhong}</Card.Title>
                    <Card.Text>{room.moTa}</Card.Text>

                    <Button variant="primary" onClick={() => goToRoom(room.id)}>
                      chi tiết
                    </Button>
                  </Card.Body>

                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </div>
          );
        })}
      </ul>
      <button> Xem toàn bộ </button>
    </div>
  );
};

export default ShowRoom;
