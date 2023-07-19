import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 28px;
  padding: 14px 45px;
  border: none;
  color: #fff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  cursor: pointer;

  ${({ $variant }) => {
    if ($variant === "primary") {
      return css`
        background: #030303;

        &:hover,
        &:focus {
          background: #755cde;
          outline: none;
        }
      `;
    }
    if ($variant === "secondary") {
      return css`
        background: #eb7565;
        margin: auto;
        display: flex;
        @media screen and (min-width: 768px) {
          margin: 0;
        }
        &:hover,
        &:focus {
          background: #f6a560;
          outline: none;
        }
      `;
    }
  }}
`;

export default ButtonStyled;
