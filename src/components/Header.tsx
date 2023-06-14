import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header" className="backdrop-blur-xl bg-[#000000bb] text-white w-full fixed top-0">
      <div className="w-full flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/logo.png" alt="logo" width={150} height={150} />
        </Link>

        <div className="checkbox-container">
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="toggle"
              checked={isMenuOpen}
              onChange={handleMenuClick}
            />
            <label htmlFor="toggle" className="checkbox">
              <div className="trace"></div>
              <div className="trace"></div>
              <div className="trace"></div>
            </label>
            <div className="menu"></div>
            <nav className="menu-itens">
              <ul>
                <li onClick={handleMenuClick}>
                  <Link
                    href="/"
                    passHref
                    className={router.pathname === "/" ? "active" : ""}
                  >
                    Início
                  </Link>
                </li>
                <li onClick={handleMenuClick}>
                  <Link
                    href="/sobre"
                    passHref
                    className={router.pathname === "/sobre-nos" ? "active" : ""}
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li onClick={handleMenuClick}>
                  <Link
                    href="/servicos"
                    passHref
                    className={router.pathname === "/servicos" ? "active" : ""}
                  >
                    Serviços
                  </Link>
                </li>
                <li onClick={handleMenuClick}>
                  <Link
                    href="/contato"
                    passHref
                    className={router.pathname === "/contato" ? "active" : ""}
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <nav className="menularge">
            <ul className="flex items-center justify-between gap-4">
              <li>
                <Link
                  href="/sobre"
                  passHref
                  className={router.pathname === "/sobre-nos" ? "border-b-2 border-yellow-500" : ""}
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  passHref
                  className={router.pathname === "/servicos" ? "border-b-2 border-yellow-500" : ""}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  passHref
                  className={router.pathname === "/contato" ? "border-b-2 border-yellow-500" : ""}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
