import styled from "styled-components";

export const Section = styled.section`
  max-width: 1140px;
  margin: 0 auto;

  .first {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    img {
      width: 100%;
      max-width: 570px;
    }

    .contact-maps {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      h1 {
        text-align: center;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 90%;
        max-width: 570px;

        input {
          color: #000;
          padding: 0.8rem 1rem;
          border-radius: 0.3rem;
        }

        button {
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .second {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 2rem;
    margin-bottom: 2rem;

    .box {
      width: 100%;

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 0;
        width: 100%;

        div {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;

          h4 {
            font-size: 16px;
          }
          p {
            font-size: 22px;
            text-align: center;
            font-weight: 700;
          }
        }
      }
    }

    iframe {
      width: 100%;
      border: 0;
      border-radius: 1rem;
    }
  }

  @media (min-width: 768px) {
    .first {
      flex-direction: row;
      justify-content: space-evenly;

      .contact-maps {
        width: 50%;
        max-width: none;
      }
      img {
        width: 50%;
        max-width: 570px;
      }
    }

    .second {
      margin-bottom: unset;
      margin: 2rem 0;
      flex-wrap: nowrap;
      .box {
        width: 50%;
        max-width: 570px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        section {
          flex-direction: row;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 1rem 0px;

    .first {
      img {
        width: 50%;
        max-width: none;
      }
    }

    .second {
      .box {
        width: 50%;
        max-width: none;
        gap: 2rem;

        section {
          div {
            align-items: flex-start;

            p {
              text-align: start;
            }
          }
        }
      }

      iframe {
        width: 50%;
      }
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
  margin-bottom: 25px;
  padding: 16px;
  border: 1px solid #999;
  outline: none;
  color: #000000;
  border-radius: 5px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
`;
