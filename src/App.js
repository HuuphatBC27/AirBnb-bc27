import Login from "modules/Authentication/pages/Login";
import Register from "modules/Authentication/pages/Register";
import Home from "modules/Home/pages/Home";
import Room from "modules/Room/pages/Room";
import "./main.scss";

// thư viện giúp quản lí form  (giá trị và validation)

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* dianamic URL */}
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
