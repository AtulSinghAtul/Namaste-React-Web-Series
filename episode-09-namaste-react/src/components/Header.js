import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let loginBtn = "Login";
  const [loginlogoutBtn, setLoginlogoutBtn] = useState("Login");

  //! first use case of dependency array
  // useEffect(() => {
  //   console.log("use Effect render after header component render");
  // });

  //! Second use case of dependency array
  // useEffect(() => {
  //   console.log("use Effect render after header component render");
  // }, []);

  //! Third use case of dependency array
  useEffect(() => {
    console.log("use Effect render after header component render");
  }, [loginlogoutBtn]);

  //! checking online or offline status
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} alt="" />
      </div>
      <ul>
        <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
        <Link to={"/"}>Home</Link>
        {/* <li>
          <a href="/about">About</a>
        </li> */}
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/service"}>Service</Link>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/grocery"}>Grocery</Link>
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
