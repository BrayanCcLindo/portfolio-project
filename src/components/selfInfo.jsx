import styled from "styled-components";
import { Button } from "../components/header";

const SelfInfoStyled = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .img {
    border-radius: 50%;
    object-position: cover;
    height: 300px;
    width: 300px;
    margin: auto;
  }
  .title {
    font-size: 26px;
    line-height: 33px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    margin-top: 5rem;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
    background: transparent;
    flex-direction: row;
    .title {
      font-size: 32px;
      line-height: 40px;
      text-align: left;
    }
    .description {
      text-align: left;
    }
    .img {
      height: 364px;
      width: 364px;
    }
  }
  @media screen and (min-width: 1024px) {
    gap: 3rem;
  }
`;

export const DescriptionTextStyled = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  margin-top: 34px;
  margin-bottom: 32px;
  text-align: center;
  color: #7a746e;
  @media screen and (min-width: 768px) {
    .description {
      text-align: left;
    }
  }
`;

const PersonalInfoStyled = styled.div``;

function SelfInfo({ id }) {
  return (
    <SelfInfoStyled id={id}>
      <img
        className="img"
        src="https://lisviks.github.io/single-page-design-portfolio-frontendmentor/assets/image-amy.webp"
        alt=""
      />
      <PersonalInfoStyled>
        <h2 className="title">
          I’m Amy, and I’d love to work on your next project
        </h2>
        <DescriptionTextStyled className="description">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </DescriptionTextStyled>
        <Button variant="secondary" />
      </PersonalInfoStyled>
    </SelfInfoStyled>
  );
}

export default SelfInfo;
