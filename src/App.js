import Home from "modules/Home/pages/Home";
import Room from "modules/Room/pages/Room";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* dianamic URL */}
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
