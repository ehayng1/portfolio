import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";
import Introduction from "../../content/Introduction.json";
import CustomContentBlock from "../../components/ContentBlock/ContentBlock/ContentBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const About = () => {
  return (
    <Container>
      <ScrollToTop />
      {/* <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={Introduction.title}
        content={Introduction.text}
        button={Introduction.button}
        // section={IntroContent.section}
        icon="developer.svg"
        id="intro2"
      /> */}
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <div style={{ height: "10vh", width: "20%" }} id="project"></div>
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={Introduction.text}
        button={Introduction.button}
        icon="developer.svg"
        id=""
      />
      {/* <div id="learnMore"></div> */}
      <div style={{ height: "10vh", width: "20%" }} id="blank"></div>
      <ContentBlock
        type="left"
        title={Introduction.title}
        content={Introduction.text}
        button={Introduction.button}
        // section={IntroContent.section}
        icon="developer.svg"
        id="intro2"
      />
      {/* <div
        style={{
          fontSize: "2rem",
          color: "#2E186A",
          fontFamily: "Motiva Sans Bold",
        }}
        id="mission"
      >
        Project Mission
      </div> */}

      <div style={{ height: "15vh", width: "10%" }} id=""></div>
      {/* <h2>Project Mission</h2>
      <CustomContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      ></CustomContentBlock> */}

      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id=""
        vid="https://www.youtube.com/embed/l4BOiq9OEP0"
      />
    </Container>
  );
};

export default About;
