import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  // let loginBtn = "Login";
  const [loginlogoutBtn, setLoginlogoutBtn] = useState("Login");

  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <button
        onClick={() => {
          // loginBtn = "Logout";
          loginlogoutBtn === "Login"
            ? setLoginlogoutBtn("Logout")
            : setLoginlogoutBtn("Login");
          console.log(loginlogoutBtn);
        }}
      >
        {loginlogoutBtn}
      </button>
    </div>
  );
};

export default Header;
