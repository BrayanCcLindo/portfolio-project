import styled from "styled-components";

const LayoutStyled = styled.main`
  max-width: 450px;
  margin: auto;
  position: relative;
  padding: 1.5rem;
  @media screen and (min-width: 768px) {
    max-width: 850px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1110px;
  }
`;

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
