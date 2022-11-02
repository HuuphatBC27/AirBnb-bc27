import React from "react";
import { BsCheckCircle } from "react-icons/bs";
const Proposition = () => {
  return (
    <div className="py-5" style={{ background: "#f1fdf7" }}>
      <div className="m-container my-xl-5 my-0">
        <div className="d-flex align-items-center proposition">
          <div className="col-xl-6 col-12 proposition-right">
            <h1 className="category-heading pb-4 text-center">Các dịch vụ nổi tiếng</h1>
            <div className="d-flex proposition-title align-items-center pb-2">
              <span className="pe-2">
                <BsCheckCircle />
              </span>{" "}
              Nhà hàng sang trọng
            </div>
            <p className="proposition-content pb-4">
              Hiện nay, với bất kỳ Resort cao cấp nào cũng có ít nhất 1 nhà hàng
              sang trọng để phục vụ khách hàng. Ở đây, thực khách sẽ được trải
              nghiệm nhiều phong cách ẩm thực khác nhau, từ các món ăn đặc sản
              của địa phương đến các món ăn đậm chất Âu, Á khác nhau như Hàn
              Quốc, Nhật Bản, Ý...
            </p>
            <div className="d-flex proposition-right-title align-items-center pb-2">
              <span className="pe-2">
                <BsCheckCircle />
              </span>{" "}
              Fitness center
            </div>
            <p className="proposition-content pb-4">
              Ngày nay, khi nhu cầu thể dục thể thao tăng cao thì phòng tập thể
              dục (phòng GYM) là một dịch vụ không thể thiếu trong các Resort
              cao cấp.
            </p>
            <div className="d-flex proposition-right-title align-items-center pb-2">
              <span className="pe-2">
                <BsCheckCircle />
              </span>{" "}
              Dịch vụ giặt ủi quần áo
            </div>
            <p className="proposition-content pb-4">
              Đây là một trong những dịch vụ không thể không có ở bất kỳ khách
              sạn hay Resort nào, đặc biệt đối với những khách lưu trú dài ngày.
              Cũng tùy theo loại trang phục mà phí giặt ủi sẽ khác nhau.
            </p>
            <div className="d-flex proposition-right-title align-items-center pb-2">
              <span className="pe-2">
                <BsCheckCircle />
              </span>{" "}
              dịch vụ phòng 24/24
            </div>
            <p className="proposition-content pb-4">
              Đây là dịch vụ mà du khách có thể sử dụng để được phục vụ thức ăn,
              đồ uống.. tại phòng 24/24.
            </p>
          </div>
          <div className="col-xl-6 col-12">
            <div className="modal-video">
              <img
                className="proposition-img"
                src="http://xyz.com.vn/wp-content/uploads/2019/05/Dich-vu-o-khach-san-4.png"
                alt=""
                loading="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposition;
