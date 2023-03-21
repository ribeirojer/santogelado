import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import logo from "../../assets/logo-removebg-preview.png";
import { Container } from "./Styles";

type Props = {};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Container>
      <Link to={"/"}>
        Santo gelado
        {
          //<img src={logo} alt="logo" />
        }
      </Link>
      <div className="checkbox-container">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="toggle"
            checked={isMenuOpen}
            onChange={handleMenuClick}
          />
          <label htmlFor="toggle" className="checkbox">
            <div className="trace"></div>
            <div className="trace"></div>
            <div className="trace"></div>
          </label>
          <div className="menu"></div>
          <nav className="menu-itens">
            <ul>
              <li>
                <Link to={"/"} onClick={handleMenuClick}>
                  Início
                </Link>
              </li>
              <li>
                <Link to={"/agency"} onClick={handleMenuClick}>
                  A Agência
                </Link>
              </li>
              <li>
                <Link to={"/offers"} onClick={handleMenuClick}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link to={"/contact"} onClick={handleMenuClick}>
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="menularge">
          <ul>
            <li>
              <Link
                to={"/"}
                className={location.pathname === "/" ? "active" : ""}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to={"/agency"}
                className={location.pathname === "/agency" ? "active" : ""}
              >
                A Agência
              </Link>
            </li>
            <li>
              <Link
                to={"/offers"}
                className={location.pathname === "/offers" ? "active" : ""}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}

export default Header;
