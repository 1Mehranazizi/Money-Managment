import {Routes,Route} from "react-router-dom";

import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import OverView from "./pages/OverView";

function App() {
  return (
    <div className="row">
      <SideBar />
      <div className="page">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/overview" element={<OverView />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
