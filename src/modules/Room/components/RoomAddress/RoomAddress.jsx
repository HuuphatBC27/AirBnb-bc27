import roomAPI from "apis/roomAPI";
import React from "react";
import useRequest from "hooks/useRequest";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const RoomAddress = ({ roomId }) => {
  const {
    data: RoomAddress,
    isLoading,
    error,
  } = useRequest(() => roomAPI.getRoomAddressDetails(roomId));
  if (!RoomAddress) return null;
  console.log(RoomAddress);
  return (
    <div className="container text-center">
      <div className="">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={RoomAddress.hinhAnh} />

          <ListGroup className="list-group-flush">
            <ListGroup.Item>Vị trí : {RoomAddress.tenViTri}</ListGroup.Item>
            <ListGroup.Item>
              tỉnh thành : {RoomAddress.tinhThanh}
            </ListGroup.Item>
            <ListGroup.Item>Quốc gia : {RoomAddress.quocGia}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default RoomAddress;
