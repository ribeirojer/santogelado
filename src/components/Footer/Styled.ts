import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 8%;
  height: 432px;
  background-image: linear-gradient(to bottom, #ff550000, ${theme.licorice});

  .footerwrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .contacts {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin-top: 0.7rem;
        display: flex;
        align-items: center;
      }
      p svg {
        color: #ffbb45;
        margin-right: 5px;
      }
    }

    .company {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin-bottom: 0.8rem;
        text-align: center;
      }
      div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        a {
          margin: 0 0.5rem;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            color: #ffbb45;
          }
        }
      }
    }

    .hours {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 28px;
        font-family: "Dancing Script";
        font-weight: 700;
        margin-bottom: 1rem;
      }
      p {
        margin-top: 0.7rem;
        span {
          margin: 0 0.5rem;
          color: #ffbb45;
        }
      }
    }
  }

  .last {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    p {
      margin-bottom: 2rem;
      span {
        color: #f00;
      }
    }
    a {
      color: var(--cor-C);
      text-decoration: none;
    }
  }

  @media (max-width: 640px) {
    height: unset;
    .footerwrapper {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      div {
        width: unset;
      }
      .toOcult {
        display: none;
      }
    }
  }
`;
