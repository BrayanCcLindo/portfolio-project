import styled from "styled-components";

const ButtonComponentStyled = styled.button`
  height: 64px;
  width: 64px;
  background: black;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:hover,
  &:focus {
    background: #755cde;
    outline: none;
  }

  /* &:focus {
    background: #755cde;
    outline: none;
  } */
`;

function ButtonComponent({ link, onClick, id }) {
  return (
    <ButtonComponentStyled onClick={onClick}>
      <a href={id}>
        <img src={link} alt="" />
      </a>
    </ButtonComponentStyled>
  );
}

export default ButtonComponent;
