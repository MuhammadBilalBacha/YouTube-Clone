import React, { useContext } from "react";
import "./LeftMenu.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillFileMusicFill } from "react-icons/bs";
import { SiTrendmicro, SiApplearcade } from "react-icons/si";
import { ImFilm } from "react-icons/im";
import {
  MdOutlineOnlinePrediction,
  MdOutlineSportsSoccer,
  MdReport,
  MdOutlineFeedback,
} from "react-icons/md";
import { BiNews, BiHelpCircle } from "react-icons/bi";
import { FaShirtsinbulk, FaGamepad } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { YoutubeContext } from "../../../Context_Api/ContextApi";

const LeftMenu = () => {
  const { myCtx } = useContext(YoutubeContext);
  return (
    <div className=" Menu pt-1">
      <div className="icons m-1  p-2" onClick={() => myCtx.setCategory("New")}>
        <div className="icon">
          <AiFillHome />
        </div>
        <div className="name fw-bold">Home</div>
      </div>
      {/* second */}
      <div
        className="icons   m-1 p-2"
        onClick={() => myCtx.setCategory("Trending")}
      >
        <div className="icon">
          <SiTrendmicro />
        </div>
        <div className="name fw-bold">Trending</div>
      </div>
      {/* three  */}
      <div
        className="icons   m-1 p-2"
        onClick={() => myCtx.setCategory("Music")}
      >
        <div className="icon">
          <BsFillFileMusicFill />
        </div>
        <div className="name fw-bold">Music</div>
      </div>
      {/* four  */}
      <div
        className="icons   m-1 p-2"
        onClick={() => myCtx.setCategory("Films")}
      >
        <div className="icon">
          <ImFilm />
        </div>
        <div className="name fw-bold">Films</div>
      </div>
      {/* five  */}
      <div
        className="icons   m-1 p-2"
        onClick={() => myCtx.setCategory("Live")}
      >
        <div className="icon">
          <MdOutlineOnlinePrediction />
        </div>
        <div className="name fw-bold">Live</div>
      </div>
      {/* six  */}
      <div
        className="icons  m-1 p-2"
        onClick={() => myCtx.setCategory("Gaming")}
      >
        <div className="icon">
          <FaGamepad />
        </div>
        <div className="name fw-bold">Gamings</div>
      </div>
      {/* seven  */}
      <div
        className="icons   m-1 p-2"
        onClick={() => myCtx.setCategory("News")}
      >
        <div className="icon">
          <BiNews />
        </div>
        <div className="name fw-bold">News</div>
      </div>
      {/* eight  */}
      <div
        className="icons  m-1 p-2"
        onClick={() => myCtx.setCategory("Sports")}
      >
        <div className="icon">
          <MdOutlineSportsSoccer />
        </div>
        <div className="name fw-bold">Sports</div>
      </div>
      {/* nine  */}
      <div
        className="icons  m-1 p-2"
        onClick={() => myCtx.setCategory("Learning")}
      >
        <div className="icon">
          <SiApplearcade />
        </div>
        <div className="name fw-bold">Learning</div>
      </div>
      {/* ten  */}
      <div
        className="icons  m-1 p-2"
        onClick={() => myCtx.setCategory("Fashion & beauty")}
      >
        <div className="icon">
          <FaShirtsinbulk />
        </div>
        <div className="name fw-bold">Fashion</div>
      </div>
      <hr className="" />
      {/* one  */}
      <div className="icons  m-1 p-2">
        <div className="icon">
          <AiFillSetting />
        </div>
        <div className="name fw-bold">Setting</div>
      </div>
      {/* two  */}
      <div className="icons   m-1 p-2">
        <div className="icon">
          <MdReport />
        </div>
        <div className="name fw-bold">Report</div>
      </div>
      {/* three  */}
      <div className="icons  m-1 p-2">
        <div className="icon">
          <BiHelpCircle />
        </div>
        <div className="name fw-bold">Help</div>
      </div>
      {/* four  */}
      <div className="icons   m-1 p-2">
        <div className="icon">
          <MdOutlineFeedback />
        </div>
        <div className="name fw-bold">Feedback</div>
      </div>
      <hr className="my-3" />
    </div>
  );
};

export default LeftMenu;
