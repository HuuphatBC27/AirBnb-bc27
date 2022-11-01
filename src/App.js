import MainLayout from "components/MainLayout/MainLayout";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import Login from "modules/Authentication/pages/Login";
import Register from "modules/Authentication/pages/Register";
import Home from "modules/Home/pages/Home";
import Room from "modules/Room/pages/Room";
import "./main.scss";

// thư viện giúp quản lí form  (giá trị và validation)

import { Route, Routes } from "react-router-dom";
const Auth = lazy(() => import("./components/Auth/Auth"));
const UserAdmin = lazy(() => import("./modules/UserAdmin/UserAdmin.jsx"));
const EditUser = lazy(() => import("modules/UserAdmin/pages/EditUser"));
const AddUser = lazy(() => import("modules/UserAdmin/pages/AddUser"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="example">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route index element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />

        <Route path="/" element={<Auth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/user" element={<UserAdmin />} />
        <Route path="user/edit/:id" element={<EditUser />} />
        <Route path="user/add" element={<AddUser />} />
      </Routes>
    </Suspense>
  );
}

export default App;
