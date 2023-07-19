import styled from "styled-components";
import ButtonStyled from "../common/button/styles";
import { useState } from "react";
import NavList from "../common/button/toogleMenu";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  position: absolute;
  background: #fff7f0;
  right: 50%;
  margin: auto;
  padding-block-end: 2rem;

  transform: translateX(50%);
  .icon-burger {
    cursor: pointer;
    padding: 0.5rem;
    border: none;
    background: none;
  }
  @media screen and (min-width: 768px) {
    position: static;
    background: none;
    max-width: 100%;
    transform: translateX(0);
    align-items: center;
    box-shadow: none;
    max-width: 850px;

    .icon-burger {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) {
    max-width: 1110px;
  }
`;

const ImgStyled = styled.img`
  height: 50px;
  width: 50px;
  padding: 0.5rem;
`;

export function Button({ variant = "primary" }) {
  return <ButtonStyled $variant={variant}>Free Consultation</ButtonStyled>;
}

function NavBar({ isMenuOpen }) {
  return (
    <NavList $isMenuOpen={!isMenuOpen}>
      <a href="" className="nav-sections">
        Home
      </a>
      <a href="#aboutMe" className="nav-sections">
        About me
      </a>
      <a href="#myWork" className="nav-sections">
        My Work
      </a>
      <a href="#contact" className="nav-sections">
        Contact
      </a>
      <Button variant="primary" />
    </NavList>
  );
}

function Header({ hideElement }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleDisplay = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderStyled>
      <ImgStyled src="../../public/Imagenes/newLogo.png" alt="" title="Logo" />
      {!hideElement && <NavBar isMenuOpen={isMenuOpen} />}
      {!hideElement && (
        <button className="icon-burger" onClick={toggleDisplay}>
          <img
            src={
              isMenuOpen
                ? "../../public/Icons/menuHamburger.svg"
                : "../../public/Icons/close-menu.svg"
            }
            alt=""
          />
        </button>
      )}
      {hideElement && <Button variant="primary" />}
    </HeaderStyled>
  );
}
export default Header;
