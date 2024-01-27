import React from "react";
import { useState } from "react";

const User = ({ name, email }) => {
  const [count] = useState(0);
  return (
    <>
      <h3>Count: {count}</h3>
      <h2>Name: {name} Functional Component</h2>
      <p>Contact: {email}</p>
    </>
  );
};

export default User;
