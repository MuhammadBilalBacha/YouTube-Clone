import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import SearchData from "./Components/SearchData/SearchData";
import { useState } from "react";
import { GiTireIronCross, GiHamburgerMenu } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import VideoDetails from "./Components/Feed/VideoDetails/VideoDetails";

function App() {
  const [menu, setMenu] = useState(true);
  const [show, setShow] = useState(false);

  const menuHandler = () => {
    setMenu(!menu);
  };
  const mycls = menu ? " menudisable  " : "bck ";
  const iconvalue = menu ? <GiHamburgerMenu /> : <GiTireIronCross />;

  const menucls = show ? "menu remove" : "menu ";

  return (
    <BrowserRouter>
      <Header menuClick={menuHandler} menuclasses={menucls} icons={iconvalue} />
      <div className="app">
        <Routes>
          <Route path="/" element={<Feed classes={mycls} />} />
          <Route path="/search/:Id" element={<SearchData />} />
          <Route path="/video/:Id" element={<VideoDetails />} />
        </Routes>
      </div>
      <div className="containe bg-dark py-2">
        <div className="d-flex justify-content-center">
          <span className="text-center text-light fw-semibold">
            Made by Muhammad Bilal{" "}
            <span className="text-danger h3 ms-2">
              <AiFillHeart />
            </span>
          </span>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
