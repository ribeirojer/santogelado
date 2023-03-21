import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 10rem;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin-right: 1rem;
  }
  a {
    color: #fff;
    &:hover {
      color: #00f;
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: center;
    }
    li {
      margin: 0.5rem 0;
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>Santo Gelado</Title>
      <Nav>
        <ul>
          <li>
            <Link to={"/"}>Página inicial</Link>
          </li>
          <li>
            <Link to={"/sobre"}>Sobre</Link>
          </li>
          <li>
            <Link to={"/contato"}>Contato</Link>
          </li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
