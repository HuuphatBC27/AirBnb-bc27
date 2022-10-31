import React from "react";

import { FaAmazon, FaEbay } from "react-icons/fa";
import {
  AiOutlineGlobal,
  AiOutlineDollarCircle,
  AiFillCodepenCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="pt-0 pt-xl-5">
      <div className="">
        <ul className="d-flex pb-5 flex-wrap">
          <li className="footer-box">
            <h4 className="footer-box-heading pb-4">Các quốc gia</h4>
            <p className="pb-4">Khu vực</p>
            <p className="pb-4">Thành phố</p>
            <p className="pb-4">Quận</p>
            <p className="pb-4">Sân bay</p>
            <p className="pb-4">Khách sạn</p>
            <p className="pb-4">Địa điểm được quan tâm</p>
          </li>
          <li className="footer-box text-end text-sm-start">
            <h4 className="footer-box-heading pb-4">About</h4>
            <p className="pb-4">Nhà</p>
            <p className="pb-4">Căn hộ</p>
            <p className="pb-4">Resort</p>
            <p className="pb-4">Biệt thự</p>
            <p className="pb-4">Nhà trọ</p>
            <p className="pb-4">Nhà nghỉ B&B</p>
          </li>
          <li className="footer-box pt-3 pt-sm-0">
            <h4 className="footer-box-heading pb-4">Những chỗ nghỉ độc đáo</h4>
            <p className="pb-4">Đánh giá của khách</p>
            <p className="pb-4">Các bài viết</p>
            <p className="pb-4">Ưu đãi theo mùa và dịp lễ</p>
            <p className="pb-4">Nhà khách</p>
            <p className="pb-4">Trung tâm thông tin bảo mật</p>
          </li>
          <li className="footer-box pt-3 pt-lg-0  text-end text-sm-start">
            <h4 className="footer-box-heading pb-4">Comunity</h4>
            <p className="pb-4">Cho thuê xe hơi</p>
            <p className="pb-4">Tìm chuyến bay</p>
            <p className="pb-4">Quan hệ cổ đông</p>
            <p className="pb-4">Điều khoản và điều kiện</p>
            <p className="pb-4">Tranh chấp đối tác</p>
          </li>
          <li className="footer-box pt-3 pt-lg-0">
            <h4 className="footer-box-heading pb-4">
              Chúng tôi hoạt động như thế nào
            </h4>
            <p className="pb-4">Liên hệ công ty</p>
            <p className="pb-4">Chính sách MSA</p>
            <p className="pb-4">
              Các câu hỏi thường gặp về virus corona (COVID-19)
            </p>
            <p className="pb-4">Truyền thông</p>
            <p className="pb-4">Đặt nhà hàng</p>
          </li>
        </ul>
        <div className="d-flex justify-content-between border-top pt-4 footer-copyright">
          <div className="footer-copy d-flex align-items-center">
            <p className="pe-sm-3 pb-3 pb-sm-0">
              <svg
                className="d-inline"
                width="89"
                height="27"
                viewBox="0 0 89 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </p>
            <span>©</span>
            <h1> AirBnb</h1>
          </div>
          <div className="pt-3 pt-lg-0 px-4 px-sm-0">
            <ul className="d-flex align-items-center footer-social flex-wrap">
              <li className="pb-3 pb-sm-0 ps-3 ps-sm-0 ps-lg-3">
                <a href>
                  <FaAmazon size="24px" />
                </a>
              </li>

              <li className="pb-3 pb-sm-0 ps-3 ps-sm-0 ps-lg-3">
                <a href>
                  <FaEbay size="24px" />
                </a>
              </li>
              <li className="footer-social-sub">
                <a href>
                  <AiOutlineGlobal size="16px" /> English
                </a>
              </li>
              <li className="footer-social-sub">
                <a href>
                  <AiOutlineDollarCircle size="16px" /> USD
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
