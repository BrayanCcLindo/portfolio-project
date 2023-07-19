import styled, { css } from "styled-components";

const NavList = styled.div`
  display: none;
  padding-block-end: 2rem;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding-block-end: 0;
  }

  ${({ $isMenuOpen }) => {
    if ($isMenuOpen) {
      return css`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;

        @media screen and (min-width: 768px) {
          flex-direction: row;
          gap: 2rem;
        }
      `;
    } else {
      return css`
        display: none;

        flex-direction: row;
      `;
    }
  }}

  .nav-sections {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    color: #030303;
    cursor: pointer;
    &:hover,
    &:focus {
      color: #755cde;
      outline: none;
    }
  }
`;

export default NavList;
