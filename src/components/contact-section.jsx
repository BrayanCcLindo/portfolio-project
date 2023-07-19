import styled from "styled-components";
import { Button } from "../components/header";

const ContactSectionStyled = styled.div`
  margin-bottom: 56px;
  margin-top: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: #030303;
  padding: 5rem;
  border-radius: 1rem;
  .contact-title {
    font-size: 26px;
    margin-block: 24px;
    line-height: 33px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    color: #fff;
    text-align: center;
  }
  .contact-description {
    font-size: 14px;
    line-height: 28px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 500;
    color: #fff;
    text-align: center;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    .contact-description {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    .contact-container {
      width: 540px;
    }
    .contact-title {
      font-size: 40px;
      text-align: left;
    }
    .contact-description {
      text-align: left;
    }
  }
`;

function ContactSection({ id }) {
  return (
    <ContactSectionStyled id={id}>
      <div className="contact-container">
        <h3 className="contact-title">Book a call with me</h3>
        <p className="contact-description">
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
      </div>
      <Button variant="secondary" />
    </ContactSectionStyled>
  );
}

export default ContactSection;
