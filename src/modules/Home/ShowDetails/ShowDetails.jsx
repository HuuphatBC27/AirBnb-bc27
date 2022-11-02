import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiSearch } from "react-icons/bi";

import CardGroup from "react-bootstrap/CardGroup";
import useRequest from "hooks/useRequest";
import { useState } from "react";
import roomAPI from "apis/roomAPI";
const ShowDetails = () => {
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

  const movePath = (path) => {
    navigate(`/${path}`);
  };

  const [SearchRooms, setSearchRooms] = useState("");

  console.log(rooms);
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4} md={4}>
            <button
              className="btn btn-danger mt-3"
              onClick={() => movePath("")}
            >
              trở về trang chủ{" "}
            </button>
          </Col>

          <Col sm={12} md={12} xs={12} lg={4}>
            {" "}
            <h1 className=" text-center">Tất cả nhà nghỉ dưỡng</h1>
          </Col>
          <Col lg={4}>
            <div class="input-group">
              <div class="form-outline">
                <input
                  placeholder="nhập phòng cần kiếm"
                  type="search"
                  id="form1"
                  class="form-control"
                  onChange={(event) => {
                    setSearchRooms(event.target.value);
                  }}
                />
              </div>
              <button type="button" class="btn btn-primary">
                <BiSearch color="white" size="16px" />
              </button>
            </div>
          </Col>
        </Row>
        <Col sm={12}>
          <ul>
            {rooms
              ?.filter((val) => {
                if (SearchRooms == "") {
                  return val;
                } else if (
                  val.tenPhong.toLowerCase().includes(SearchRooms.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((room) => {
                return (
                  <div className="container">
                    <CardGroup className=" pt-5">
                      <Card>
                        <Card.Img variant="top" src={room.hinhAnh} />
                        <Card.Body>
                          <Card.Title>{room.tenPhong}</Card.Title>
                          <Card.Text>{room.moTa}</Card.Text>

                          <Button
                            variant="primary"
                            onClick={() => goToRoom(room.id)}
                          >
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
        </Col>
      </Container>
    </div>
  );
};

export default ShowDetails;
