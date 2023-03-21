import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./Styles";
import Logo from "../Logo";

type Props = {};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Logo></Logo>
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
                <Link to={"/sobre-nos"} onClick={handleMenuClick}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to={"/servicos"} onClick={handleMenuClick}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link to={"/contato"} onClick={handleMenuClick}>
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
                to={"/sobre-nos"}
                className={location.pathname === "/sobre-nos" ? "active" : ""}
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                to={"/servicos"}
                className={location.pathname === "/servicos" ? "active" : ""}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to={"/contato"}
                className={location.pathname === "/contato" ? "active" : ""}
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
