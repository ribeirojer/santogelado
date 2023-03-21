import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link to={"/"}>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
