import React from "react";
import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { resData } = props;

  // console.log(resData);

  //! Inline CSS
  const styleCard = {
    backgroundColor: "#f4f0f1",
    width: "200px",
    height: "fit-content",
    border: "2px solid black",
  };
  const resLogo = {
    width: "100%",
    height: "55%",
  };

  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    <div className="res-card" style={styleCard}>
      <img style={resLogo} src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResturantCard;
