import styled from "styled-components";
import img1 from "../../assets/dmitriy-frantsev-rjSnhPy3bxI-unsplash.jpg";
import img2 from "../../assets/helena-lopes-a4z8GRkVSUM-unsplash.jpg";
import img3 from "../../assets/louis-hansel-2nPS_9TV0VA-unsplash.jpg";
import ImageCarousel from "../../components/ImageCarrousel";
import theme from "../../theme";

type Props = {};

const SobreNosContainer = styled.main`
  padding: 50px 0;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 25px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`;

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

const Inicio = (props: Props) => {
  const images = [img1, img2, img3];
  //https://unsplash.com/pt-br/fotografias/rjSnhPy3bxI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
  //https://unsplash.com/pt-br/fotografias/a4z8GRkVSUM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
  //https://unsplash.com/pt-br/fotografias/a4z8GRkVSUM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

  return (
    <main>
      <ImageCarousel images={images} />
      <SobreNosContainer>
        <div>
          <h2>Quem Somos</h2>
          <p>
            A Santo Gelado Drinks é uma empresa de bartenders profissionais que
            fornece serviços de drinks personalizados e deliciosos para festas e
            eventos especiais. Nossa equipe experiente é apaixonada por
            proporcionar aos nossos clientes uma experiência única e
            inesquecível com nossos serviços exclusivos.
          </p>
          <p>
            Fundada em 2015, a Santo Gelado Drinks começou como um pequeno
            negócio local em São Paulo e desde então expandiu-se para atender
            clientes em toda a região. Nossa filosofia é simples: oferecer
            serviços de alta qualidade com um toque pessoal.
          </p>
        </div>
        <div>
          <h2>Nossa Equipe</h2>
          <p>
            Nossa equipe é composta por bartenders experientes e talentosos que
            são especializados em criar drinks personalizados para cada evento.
            Estamos sempre atualizados com as últimas tendências em coquetelaria
            e nos esforçamos para garantir que cada drink seja perfeito em
            sabor, aparência e apresentação.
          </p>
          <p>
            Acreditamos que nossa equipe é a chave para o sucesso da Santo
            Gelado Drinks e estamos comprometidos em fornecer treinamento
            contínuo e oportunidades de crescimento para nossos funcionários.
          </p>
        </div>
      </SobreNosContainer>
      <ServicosContainer>
        <h2>Nossos Serviços</h2>
        <div>
          <h3>Serviço de Bartender para Eventos</h3>
          <p>
            Nossa equipe de bartenders experientes está pronta para fornecer
            drinks deliciosos e personalizados para sua festa ou evento
            especial.
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
    </main>
  );
};

export default Inicio;
