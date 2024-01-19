import { LOGO_URL } from "../utils/constant";
const Header = () => {
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
    </div>
  );
};

export default Header;
