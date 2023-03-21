import whats from "../src/assets/WhatsApp.png";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(
    -45deg,
    #080f0fff,
    #1e130fff,
    #705f3dff,
    #ebbe09ff
  );
  background-size: 400% 400%;
  animation: backgroundTransition 8s ease-in-out infinite;

  .whats {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    .logo {
      width: 4rem;
      animation-name: pulse;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      transform-origin: center bottom;
    }
  }

  @keyframes backgroundTransition {
    0% {
      background-position: 0% 80%;
    }
    50% {
      background-position: 80% 100%;
    }
    100% {
      background-position: 0% 90%;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    10% {
      transform: rotate(-3deg) scale(0.98);
    }
    20% {
      transform: rotate(3deg) scale(1.02);
    }
    30% {
      transform: rotate(-3deg) scale(1);
    }
    40% {
      transform: rotate(3deg) scale(1);
    }
    50% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Header></Header>
      <Outlet></Outlet>
      <a
        target="_blank"
        rel="external"
        className="whats"
        href="https://api.whatsapp.com/send?phone=5547988460695&amp;text=Olá,%20tudo%20bem?"
      >
        <img src={whats} className="logo" />
      </a>
      <Footer></Footer>
    </Wrapper>
  );
}

export default App;
