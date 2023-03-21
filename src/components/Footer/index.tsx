import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  PinterestLogo,
  TwitterLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-removebg-preview.png";
import { Wrapper } from "./Styled";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <div className="footerwrapper">
        <div className="contacts">
          <h3>Entre em Contato</h3>
          <p>
            <MapPin size={24} weight="fill" /> Rua Agrolândia, 325 Glória,
            Joinville - SC
          </p>
          <p>
            <Phone size={24} weight="fill" /> (47) 99605-9604
          </p>
          <p>
            <EnvelopeSimple size={24} weight="fill" /> contato@heythere.com
          </p>
        </div>
        <div className="company">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <p>Diga "Oi!" para seu novo parceiro digital</p>
          <p>levando sua presença digital para o próximo nível</p>
          <div>
            <a href="https://www.facebook.com" target={"_blank"}>
              <FacebookLogo size={48} />
            </a>
            <a href="https://www.twitter.com" target={"_blank"}>
              <TwitterLogo size={48} />
            </a>
            <a href="https://www.linkedin.com" target={"_blank"}>
              <LinkedinLogo size={48} />
            </a>
            <a href="https://www.instagram.com" target={"_blank"}>
              <InstagramLogo size={48} />
            </a>
            <a href="https://www.pinterest.com" target={"_blank"}>
              <PinterestLogo size={48} />
            </a>
          </div>
        </div>
        <div className="hours toOcult">
          <h3>Atendimento</h3>
          <p>Segunda à Sábado</p>
          <p>
            <span>08:00 </span> às <span> 17:00</span>
          </p>
        </div>
      </div>
      <div className="last">
        <p>&copy; Hey There! - Todos os direitos reservados.</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
