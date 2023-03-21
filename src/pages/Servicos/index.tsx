import styled from "styled-components";
import { theme } from "../../theme";

type Props = {};

const ServicosContainer = styled.main`
  padding: 6rem 0 0 0;

  h2 {
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
  }

  div {
    padding: 30px;
    margin-bottom: 30px;

    h3 {
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 15px;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 15px;
    }

    ul {
      list-style: none;
      padding-left: 0;

      li {
        font-size: 1.2rem;
        margin: 0 0 5px 1rem;

        &:before {
          content: "•";
          margin-right: 5px;
          color: ${theme.saffron};
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    div {
      padding: 15px;
      margin-bottom: 20px;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        margin-bottom: 10px;
      }

      ul {
        display: flex;
        flex-direction: column;
        li {
          font-size: 1rem;
        }
      }
    }
  }
`;

const Servicos = (props: Props) => {
  return (
    <ServicosContainer>
      <h2>Nossos Serviços</h2>
      <div>
        <h3>Serviço de Bartender para Eventos</h3>
        <p>
          Nossa equipe de bartenders experientes está pronta para fornecer
          drinks deliciosos e personalizados para sua festa ou evento especial.
        </p>
        <ul>
          <li>Bartender profissional</li>
          <li>Seleção de bebidas de alta qualidade</li>
          <li>Cardápio personalizado</li>
          <li>Montagem completa do bar</li>
          <li>Atendimento personalizado aos convidados</li>
        </ul>
      </div>
    </ServicosContainer>
  );
};

export default Servicos;
