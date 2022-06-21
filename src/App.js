import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import OverView from "./pages/OverView";
import Payments from "./pages/Payments";
import Transactions from "./pages/Transactions";
import History from "./pages/History";
import Setting from "./pages/Setting";

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
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<OverView />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/transactions" element={<Transactions />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/setting" element={<Setting />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
