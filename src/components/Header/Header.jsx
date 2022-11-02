import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import useRequest from "../../hooks/useRequest";
import { NavLink } from "react-router-dom";
import { logout } from "../../modules/Authentication/slices/authSlice";

import {
  MdOutlineNotifications,
  MdMailOutline,
  MdOutlineFormatListBulleted,
} from "react-icons/md";
import userAPI from "../../apis/userAPI";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user")) || "";
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLogout, setisLogout] = useState(false);

  const navigate = useNavigate();
  const { data: userInfo } = useRequest(() =>
    userAPI.getUserById(user.user.id)
  );
  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchJob = (value) => {
    if (!value) {
      return;
    }
    navigate(`categories/${value}`);
  };

  const movePath = (path) => {
    navigate(`/${path}`);
  };

  const handleLogout = () => {
    setisLogout(!isLogout);
    dispatch(logout());
    navigate("../");
  };

  const moveSetttings = (data) => {
    dispatch({ type: "changeInfo", data });
    movePath(`profile/account/${user.user?.name}`);
  };

  return (
    <div className="header-nav-fixed">
      <div className="m-container">
        <div className="d-flex justify-content-between align-items-center">
          <h3>© Airbnb</h3>
          <div
            className="header-search header-nav-input col-6 ps-3"
            style={{ display: "block" }}
          ></div>
          <nav className="header-nav-auth flex-grow-1">
            <ul
              style={{ display: user === "" ? "flex" : "none" }}
              className="justify-content-end align-items-center"
            >
              <li>
                <a
                  className="header-nav-seller header-config-text px-3 "
                  href="true"
                >
                  trở thành chủ nhà
                </a>{" "}
              </li>
              <li>
                <button
                  onClick={() => movePath("register")}
                  className="header-config-text px-3 btn btn-dark"
                  href="true"
                >
                  Register
                </button>
              </li>
              <li>
                <button
                  onClick={() => movePath("login")}
                  className="header-nav-btn btn btn-light"
                >
                  Join
                </button>
              </li>
            </ul>
            <ul
              style={{ display: user === "" ? "none" : "flex" }}
              className="justify-content-end align-items-center"
            >
              <li className="pe-3 d-none d-md-block">
                <NavLink>
                  <MdOutlineNotifications fontSize="20px" />
                </NavLink>
              </li>
              <li className="pe-3 d-none d-md-block">
                <NavLink>
                  <MdMailOutline fontSize="20px" />
                </NavLink>
              </li>
              <li className="pe-3 d-none d-md-block">
                <NavLink>
                  <MdOutlineFormatListBulleted fontSize="20px" />
                </NavLink>
              </li>
              <li className="d-flex position-relative header-nav-submenu">
                <button onClick={() => showMenu()}>
                  {" "}
                  <img
                    className="header-nav-avatar rounded-circle"
                    src={
                      userInfo?.avatar
                        ? userInfo.avatar
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    }
                    alt=""
                  />
                </button>
                <div
                  className="position-absolute header-submenu p-3 rounded-2"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  <ul className="py-1 border-bottom">
                    <li className="pb-2 header-submenu-item">
                      <NavLink to={`profile/${user.user?.id}`}>Profile</NavLink>
                    </li>
                    <li className="pb-2 header-submenu-item">Manage Request</li>
                    <li className="pb-2 header-submenu-item">Post a Request</li>
                  </ul>
                  <ul className="py-1 border-bottom">
                    <li className="py-2 header-submenu-item">
                      trở thành chủ nhà
                    </li>
                    <li
                      onClick={() => moveSetttings(user)}
                      className="pb-2 header-submenu-item"
                    >
                      Setting
                    </li>
                    <li className="pb-2 header-submenu-item">Billing</li>
                  </ul>
                  <ul className="py-1 border-bottom">
                    <li className="py-3 header-submenu-item">English</li>
                    <li className="pb-2 header-submenu-item ">USD</li>
                    <li className="pb-2 header-submenu-item">Help & suport</li>
                  </ul>
                  <ul className="pb-1">
                    <li
                      onClick={() => handleLogout()}
                      className="pt-2 header-submenu-item"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
