import styled from "styled-components";

export const Wrapper = styled.main`
  .wrapperb,
  .wrapperc {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    img {
      width: 50vw;
    }
  }
  .wrapperb {
    margin: 0 auto;
    div {
      margin: 4rem 0 0 2rem;
      align-items: flex-end;
    }
    h2 {
      text-align: end;

      span {
        color: #ffbb45;
      }
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

  .styledsection {
    padding: 3rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6dc8c2;
    color: #4a1942;

    .offer {
      display: flex;
      flex-wrap: wrap;
      span {
        color: white;
        font-weight: bold;
        padding: 1rem;
        border-radius: 1rem;
        background-color: #4a1942;
        margin: 0 1rem;
      }
    }

    @media (min-width: 1024px) {
      gap: 3rem;
    }
  }

  .wrapperc {
    margin: 3rem auto;
    flex-direction: row-reverse;
    div {
      justify-content: center;
    }
    img {
      transform: scaleX(-1);
    }
  }

  @media (max-width: 1024px) {
    .wrapperb,
    .wrapperc {
      display: flex;
    }
    .toOcult {
      display: none;
    }
    .styledsection {
      .offer {
        display: grid;
        margin: 1rem;
        grid-template-columns: repeat(3, 1fr);
        span {
          margin: 1rem;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  @media (max-width: 640px) {
    .wrapperb,
    .wrapperc {
      display: block;
      img {
        width: unset;
      }
    }
    .toOcult {
      display: block;
    }
    .toOcultSmall {
      display: none;
    }
    .wrapperb {
      div {
        margin: 4rem 2rem 0;
        align-items: center;
      }
      h2 {
        text-align: center;
      }
    }
    .styledsection {
      h1 {
        text-align: center;
      }
      .offer {
        display: grid;
        margin: 1rem;
        grid-template-columns: repeat(2, 1fr);
        span {
          margin: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }
    }
    .wrapperc {
      div {
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
          text-align: center;
        }
      }
      .toOcult {
        display: none;
      }
    }
  }
`;
