import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";

const Header = () => {
  // let loginBtn = "Login";
  const [loginlogoutBtn, setLoginlogoutBtn] = useState("Login");

  const { userLoggedIn } = useContext(userContext);

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
    <div className="flex flex-row items-center justify-between w-screen h-40 bg-green-200">
      <div className="h-[100%]">
        <img src={LOGO_URL} alt="" className="h-[100%]" />
      </div>
      <ul className="flex flex-row items-center justify-between gap-6 text-lg text-green-800">
        <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
        <Link
          className="hover:text-green-100 hover:bg-green-500  p-2 rounded-md"
          to={"/"}
        >
          Home
        </Link>
        {/* <li>
          <a href="/about">About</a>
        </li> */}
        <Link
          to={"/about"}
          className="hover:text-green-100 hover:bg-green-500  p-2 rounded-md"
        >
          About
        </Link>
        <Link
          to={"/contact"}
          className="hover:text-green-100 hover:bg-green-500  p-2 rounded-md"
        >
          Contact
        </Link>
        <Link
          to={"/service"}
          className="hover:text-green-100 hover:bg-green-500  p-2 rounded-md"
        >
          Service
        </Link>
        <Link
          to={"/cart"}
          className="hover:text-green-100 hover:bg-green-500  p-2 rounded-md"
        >
          Cart
        </Link>
        <Link
          to={"/grocery"}
          className="hover:text-green-100 hover:bg-green-500  p-2 rounded-md"
        >
          Grocery
        </Link>
      </ul>
      <button
        onClick={() => {
          // loginBtn = "Logout";
          loginlogoutBtn === "Login"
            ? setLoginlogoutBtn("Logout")
            : setLoginlogoutBtn("Login");
          console.log(loginlogoutBtn);
        }}
        className="bg-green-600 hover:bg-green-500 text-green-200 hover:text-green-100 mr-8 px-4  py-2 rounded-md"
      >
        {loginlogoutBtn}
      </button>

      <span className="font-bold">{userLoggedIn}</span>
    </div>
  );
};

export default Header;
