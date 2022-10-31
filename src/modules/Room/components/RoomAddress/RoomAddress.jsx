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
        <Card>
          <Card.Img variant="top" src={RoomAddress.hinhAnh} />

          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <h3>Vị trí : {RoomAddress.tenViTri}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>tỉnh thành : {RoomAddress.tinhThanh}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Quốc gia : {RoomAddress.quocGia}</h5>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default RoomAddress;
