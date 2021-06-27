import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
//import SingleRoom from "./SingleRoom";
import RoomContainer from "../components/RoomContainer";

export const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary" style={{ color: "blue" }}>
            return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
      {/* <SingleRoom /> */}
    </>
  );
};
