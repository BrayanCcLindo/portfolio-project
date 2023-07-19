import styled from "styled-components";
import { DescriptionTextStyled } from "./selfInfo";

const LandingStyled = styled.div`
  margin-top: 120px;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  border-radius: 8px;
  background: ${(props) => props.$bg ?? "#ccc"};
  &:hover {
    transform: scale(1.01);
    transition: 0.3s;
  }
`;
const CardContainer = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 364px 182px 158px 182px 182px;
  gap: 24px 25px;
  & > :nth-child(1) {
    grid-column: 1/3;
  }
  & > :nth-child(2) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  & > :nth-child(3) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  & > :nth-child(4) {
    grid-column: 1/3;
    grid-row: 3/3;
  }
  & > :nth-child(5) {
    grid-column: 1/3;
    grid-row: 4/4;
  }
  & > :nth-child(6) {
    grid-column: 1/3;
    grid-row: 5/5;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 182px 158px 182px;
    gap: 24px 23px;
    gap: 1rem;
    & > :nth-child(1) {
      grid-column: 1/3;
      grid-row: 1/3;
    }
    & > :nth-child(2) {
      grid-column: 3/4;
      grid-row: 1/2;
    }
    & > :nth-child(3) {
      grid-column: 4/5;
      grid-row: 1/2;
    }
    & > :nth-child(4) {
      grid-column: 1/3;
      grid-row: 3/3;
    }
    & > :nth-child(5) {
      grid-column: 3/5;
      grid-row: 2/3;
    }
    & > :nth-child(6) {
      grid-column: 3/5;
      grid-row: 3/4;
    }
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 182px 158px;
    gap: 24px 25px;
    gap: 1rem;

    & > :nth-child(4) {
      grid-column: 5/7;
      grid-row: 1/2;
    }
    & > :nth-child(6) {
      grid-column: 5/7;
      grid-row: 2/3;
    }
  }
`;

const TextStyled = styled.div`
  text-align: center;
  padding: 0.5rem;
  .main-title {
    font-size: 36px;
    line-height: 45px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    .main-title {
      font-size: 44px;
      line-height: 55px;
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TitleStyled = styled.h3`
  display: flex;
  justify-content: flex-start;
  color: #fff;
  text-align: left;
  font-size: 24px;
  line-height: 30px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
`;

function Landing() {
  return (
    <LandingStyled>
      <MainText />
      <CardContainer>
        <CardDesign
          title="Graphic Design"
          url="https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/pattern-graphic-design.svg"
          bg={"#755CDE"}
        />
        <CardDesign
          title="UI / UX"
          url="https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/pattern-ui-ux.svg"
          bg={"#F6A560"}
        />
        <CardDesign
          title="Apps"
          url="https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/pattern-apps.svg"
          bg={"#F39E9E"}
        />
        <CardDesign
          title="Photography"
          url="https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/pattern-photography.svg"
          bg={"#61C4B7"}
        />
        <CardDesign
          title="Illustrations"
          url="https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/pattern-illustrations.svg"
          bg={"#EB7565"}
        />
        <CardDesign
          title="Motion Graphics"
          url="https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/pattern-motion-graphics.svg"
          bg={"#552049"}
        />
      </CardContainer>
    </LandingStyled>
  );
}

function MainText() {
  return (
    <TextStyled>
      <h1 className="main-title">Design solutions made easy</h1>
      <DescriptionTextStyled>
        With over ten years of experience in various design disciplines, Im your
        one-stop shop for your design needs.
      </DescriptionTextStyled>
    </TextStyled>
  );
}

function CardDesign({ title, url, bg }) {
  return (
    <CardWrapper $bg={bg}>
      <ImgContainer>
        <img src={url} alt="" />
      </ImgContainer>
      <TitleStyled>{title}</TitleStyled>
    </CardWrapper>
  );
}

export default Landing;
