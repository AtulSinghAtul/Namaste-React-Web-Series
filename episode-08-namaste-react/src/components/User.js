import React from "react";
import { useState, useEffect } from "react";

const User = ({ name, email }) => {
  const [count] = useState(0);

  // useEffect(() => {}, [count, count2]);

  //! unmounting the page to stoped the set interval
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Set Interval from useEffect");
    }, 1000);

    //console.log("use effect called before return function");
    return () => {
      clearInterval(timer);
      //console.log("useEffect called inside return function");
    };
  }, []);

  //console.log("render in first time");

  return (
    <>
      <h2>Name: {name} Functional Component</h2>
      <h3>Count: {count}</h3>

      <p>Contact: {email}</p>
    </>
  );
};

export default User;
