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
    font-size: 1.5rem;
    line-height: 2rem;
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

  @media (max-width: 640px) {
    p {
      font-size: 2rem;
      line-height: 2.4rem;
    }
    .cards {
      margin: 0 auto;
    }
  }

  a {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`;
