import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import OverView from "./pages/OverView";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="row">
      <SideBar openMenuHandler={openMenuHandler} openMenu={openMenu} />
      <div className="page">
        <Header openMenuHandler={openMenuHandler} openMenu={openMenu} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/overview" element={<OverView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
