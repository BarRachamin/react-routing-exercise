import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import FaceIcon from "@mui/icons-material/Face";

export const SidebarComponent = (props) => {
  return (
    <div className="background">
      <ul className="container">
        <li>
          <Link to="/" className="color">
            <HomeIcon />
            <h4 className="section-name">Home</h4>
          </Link>
        </li>
        <li>
          <Link to="about" className="color">
            <InfoIcon />
            <h3 className="section-name"> About</h3>
          </Link>
        </li>
        <li>
          <Link to="/contactus" className="color">
            <CallIcon />
            <h3 className="section-name">Contact Us</h3>
          </Link>
        </li>
        <li>
          <Link to="/movies" className="color">
            <MovieCreationIcon />
            <h3 className="section-name">Movies</h3>
          </Link>
        </li>
        <li>
          <Link to="/games" className="color">
            <SmartToyIcon />
            <h3 className="section-name"> Games</h3>
          </Link>
        </li>
        <li className="Name">
          <FaceIcon />
          <h3 className="section-name">Bar Rachamin</h3>
        </li>
      </ul>
    </div>
  );
};
