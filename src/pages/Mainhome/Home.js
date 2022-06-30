import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Stack from "@mui/material/Stack";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();
  const sw = () => {
    navigate("/buycar");
  };
  const sw2 = () => {
    navigate("/sellcar");
  };
  return (
    <div className="bgImage">
      <Navbar />
      <div className="home-content">
        <div className="home-title">Make your purchases with our app</div>
        <div className="home-subtext">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </div>
        <Stack spacing={2} direction="row">
          <button className="home-button contained" onClick={sw}>
            BUY CAR
          </button>
          <button className="home-button outlined" onClick={sw2}>
            SELL CAR
          </button>
        </Stack>
      </div>
    </div>
  );
};

const styles = {
  "&.MuiButton-root": {
    border: "2px black solid",
  },
  "&.MuiButton-text": {
    color: "grey",
  },
  "&.MuiButton-contained": {
    color: "yellow",
  },
  "&.MuiButton-outlined": {
    color: "brown",
  },
};
const mystyles = {
  backgroundColor: "yellow",
  height: "250px",
  width: "250px",
  position: "relative",
  top: 160,
  left: 0,
  right: 0,
  margin: "auto",
  borderRadius: 50,
  broderWidth: 1,
  borderStyle: "solid",
  boxShadow: "1px 1px 20px 5px #C9C9C9",
};
const mystyles2 = {
  position: "relative",
  top: 100,
  left: 60,
  right: 0,
  margin: "auto",
};
export default Home;
