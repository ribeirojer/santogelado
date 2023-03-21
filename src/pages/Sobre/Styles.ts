import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 2.5rem;

  h2 {
    text-align: center;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
  }

  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1140px;
  }

  .wrapperb {
    max-width: 1280px;
    display: flex;
    align-items: center;
    margin: 0px auto 0px;
    img {
      width: 50vw;
    }

    .desaparecer {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    .desaparecer.scroll {
      opacity: 0;
    }
    .mover {
      position: fixed;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      animation: moveUpDown 2s ease-in-out infinite;
    }

    @keyframes moveUpDown {
      0% {
        transform: translate(-50%, 0);
      }
      50% {
        transform: translate(-50%, -10px);
      }
      100% {
        transform: translate(-50%, 0);
      }
    }
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.5rem;
      margin: 0 2rem;
    }
    p {
      margin: 1rem 2rem;
    }
    .wrapperb {
      display: flex;
      margin: 0 auto 4rem;
    }
  }

  @media (max-width: 640px) {
    h2 {
      font-size: 1.8rem;
      margin: 0 2rem;
    }
    .wrapperb {
      display: block;
      margin: 0 auto;
      img {
        width: unset;
      }
      h2 {
        text-align: center;
      }
    }
  }
  a {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`;
