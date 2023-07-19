import Header from "./components/header";
import GlobalStyle from "./globalStyles";
import Layout from "./layout";
import Landing from "./components/landing";
import SelfInfo from "./components/selfInfo";
import Slider from "./components/slider";
import ContactSection from "./components/contact-section";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header hideElement={false} />
        <Landing />
        <SelfInfo id="aboutMe" />
      </Layout>
      <Slider id="myWork" />
      <Layout>
        <ContactSection id="contact" />
        <Header hideElement={true} />
      </Layout>
    </>
  );
}

export default App;
