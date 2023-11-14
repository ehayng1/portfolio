import { lazy, useEffect, useState } from "react";
import IntroContent from "../../content/IntroContent.json";
import { SvgIcon } from "../../common/SvgIcon";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import CustomContentBlock from "../../components/ContentBlock/ContentBlock/ContentBlock";
import ContactContent from "../../content/ContactContent.json";
import { Slide, Zoom } from "react-awesome-reveal";
import Introduction from "../../content/Introduction.json";
import PostureData from "../../content/Posture.json";
import { Button } from "../../common/Button";

import { Card, Col, Row, Space } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import TechBubble from "../../components/TechBubble/TechBubble";
import "./index.scss";
import AOS from "aos";
import { ProjectCard } from "../../components/ProjectCard";
import "aos/dist/aos.css";

const Contact = lazy(() => import("../../components/ContactForm"));
const Posture = lazy(() => import("../../components/Posture"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const mobileMediaQuery = "@media (max-width: 767px)";
const textColor = "#18216d";

const mobileStyles = {
  marginBottom: "5vh",
};

const Home = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);
  let OSName = "Unknown OS";
  let downloadLink = "";
  if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
  if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
  if (OSName === "Macintosh") {
    downloadLink =
      "https://download1650.mediafire.com/rhe1ad3nwi7g8r_elW8C8W8_jz9rFxrCAG3tEnRHI_vY3csNk4hYGywmGI3OwqstPi-pf44FD7ZsMJHZ60OT1prAkV-PqI_GkCiooqA-dPrxnFuu9htJ84AzY9n04MgtHM7J6cJdBG2OXdnJkQPzNQ4KsPyl8UHqjTGE75Z_x6ScJg/urii9ntmdw7wfj4/sitstraight-darwin-arm64-1.0.3.zip";
  } else if (OSName === "Windows") {
    downloadLink =
      "https://download846.mediafire.com/wpkwgp3hfgqg9Fw50wXy6Jjx8zIPn_qBtgA0h9tuHOtIJIAJ-E9TQI5qClQDyqwnA1sV7kbl_ITbYZl9LmmAA941TFGXW0VDlSVQLzfHm2Q6I4LUYWmQCubRdYJQ4rFfNHA0lp3mnGarMDKkLKf5UiM6dROdyz0DFV7944XqfhZuvQ/x4y3sr834iyc1wv/SitStraight-1.0.1.exe";
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setFirstLoad(false);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <ScrollToTop />
      {/* <div style={{ marginTop: "0rem" }} id="intro"></div> */}
      <div style={{ height: "10vh", width: "20%" }} id="intro"></div>
      {/* <div
        id=""
        style={{
          color: "#2E186A",
          fontSize: "4rem",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "0rem",
        }}
      >
      </div> */}
      {/* <img
        onClick={() => scrollTo("intro")}
        data-aos="fade-up"
        data-aos-offset="400"
        // data-aos-delay="500"
        data-aos-delay="00"
        // data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        // data-aos-anchor-placement="top-top"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "0rem",
          overflow: "hidden",
          width: "90%",
          maxWidth: "600px",
        }}
        src="https://i.ibb.co/NrrrPS9/output-onlinegiftools.gif"
      ></img> */}
      <div
        data-aos="fade-up"
        data-aos-offset="00"
        data-aos-delay="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        // data-aos-once="true"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "0rem",
          overflow: "hidden",
          fontSize: "1.5rem",
          fontWeight: "bolder",
          color: textColor,
        }}
      >
        Hi, my name is
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="00"
        data-aos-delay="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        // data-aos-once="true"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3vh",

          overflow: "hidden",
        }}
      >
        <h1>Sam.</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="00"
        data-aos-delay="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        // data-aos-once="true"
        style={{
          marginTop: "-1rem",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          overflow: "hidden",
          color: "#606697",
          // fontWeight: "bolder",
          fontFamily: "Motiva Sans Bold",
          fontSize: "2.5rem",
        }}
      >
        I love web and mobile development.
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="00"
        data-aos-delay="2500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        // data-aos-once="true"
        style={{
          width: "50vw",
          display: "block",
          marginTop: "5vh",
          overflow: "hidden",
          color: textColor,
          fontSize: "1.3rem",
          lineHeight: 1.41,
          marginBottom: "15vh",
        }}
      >
        <div>
          I am a senior student at the University of Minnesota, currently
          pursuing a degree in computer science. Upon completion of my first
          programming course, I became captivated by the potential of
          programming and the joy of from problem-solving. This experience led
          me to decide to focus my career in the field of software development.
        </div>
      </div>
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={Introduction.button}
        icon="developer.svg"
        id=""
      />
      <div style={{ marginTop: "0rem" }} id="learnMore"></div>

      <div style={{ height: "10vh", width: "10%" }} id="project"></div>
      <div
        style={{
          fontSize: "3rem",
          color: "#2E186A",
          fontFamily: "Motiva Sans Bold",
        }}
        // id="project"
      >
        Projects
      </div>
      <div style={{ height: "5vh", width: "10%" }} id=""></div>
      <Row gutter={20} justify="start">
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={mobileStyles}>
          <ProjectCard
            projectName={"Funducate"}
            src={undefined}
            description={"Mobile application for stock investment"}
            Techs={["React Native", "Firebase", "Chart.js", "Rapid API"]}
            url={"https://i.ibb.co/CvZNrcV/dream.png"}
            width={"60%"}
            height={"60%"}
            links={{
              apple: "https://apps.apple.com/us/app/funducate/id6449999432",
              main: "https://apps.apple.com/us/app/funducate/id6449999432",
              google:
                "https://play.google.com/store/apps/details?id=com.ehayng1.Funducate",
            }}
            // alignment={undefined}
            alignment={"center"}
          ></ProjectCard>
        </Col>
        {/* <Col span={4}></Col> */}
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={mobileStyles}>
          <ProjectCard
            projectName={"SitStraight"}
            // src={"dream.png"}
            src={undefined}
            url={"https://i.ibb.co/NrrrPS9/output-onlinegiftools.gif"}
            description={"Multi platform application for posture improvement."}
            Techs={["Javascript", "Firebase", "Bootstrap", "Electron.js"]}
            width={"75%"}
            height={"75%"}
            alignment={"center"}
            links={{
              apple:
                "https://www.4sync.com/web/directDownload/07vKYa5o/VyBHVe7g.c83cb1599a8b9e1a3af6e6d3481fca02",
              windows: "asd",
              webapp: "https://situpwebapp.netlify.app/",
              web: "https://sit-straight.netlify.app/",
              main: "https://sit-straight.netlify.app/",
            }}
          ></ProjectCard>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={mobileStyles}>
          <ProjectCard
            projectName={"LiServe"}
            // src={"dream.png"}
            src={undefined}
            url={
              "https://i.pinimg.com/originals/26/20/8c/26208c54439dd5d89de0256177496258.gif"
            }
            description={"Real time library reservation web application."}
            Techs={["React", "Firebase", "MUI", "Nivo Chart"]}
            width={"80%"}
            height={"75%"}
            alignment={"center"}
            links={{
              web: "https://liserve.netlify.app/",
              main: "https://liserve.netlify.app/",
            }}
          ></ProjectCard>
        </Col>
        {/* <Col span={4}></Col> */}
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={mobileStyles}>
          <ProjectCard
            projectName={"Calendar"}
            // src={"dream.png"}
            src={undefined}
            url={
              "https://static.vecteezy.com/system/resources/previews/010/160/988/non_2x/calendar-icon-sign-symbol-design-free-png.png"
            }
            description={"Calendar web application for stress management."}
            Techs={["React", "Firebase", "tailwind"]}
            width={"75%"}
            height={"75%"}
            alignment={"center"}
            links={{
              web: "https://calendargoogle.netlify.app/",
              main: "https://calendargoogle.netlify.app/",
            }}
          ></ProjectCard>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={mobileStyles}>
          <ProjectCard
            projectName={"myKStar"}
            // src={"dream.png"}
            src={undefined}
            url={"https://i.ibb.co/721y10F/logo.png"}
            description={
              "A Language learning platform where users learn by singing."
            }
            Techs={["React", "Firebase", "MUI", "Chart.js"]}
            width={"75%"}
            height={"75%"}
            alignment={"center"}
            links={{
              web: "https://mykstar.netlify.app/",
              main: "https://mykstar.netlify.app/",
            }}
          ></ProjectCard>
        </Col>
      </Row>

      <div style={{ height: "10vh", width: "10%" }} id="work"></div>
      <div
        style={{
          fontSize: "3rem",
          color: "#2E186A",
          fontFamily: "Motiva Sans Bold",
        }}
        // id="project"
      >
        Work
      </div>

      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="null"
      />

      <div style={{ height: "5vh", width: "10%" }}></div>
      <div
        style={{
          fontSize: "3rem",
          marginBottom: "3rem",
          color: "#2E186A",
          fontFamily: "Motiva Sans Bold",
        }}
        // id="project"
      >
        Contact
      </div>
      <div
        style={{
          marginLeft: "35%",
          marginRight: "auto",
          marginBottom: "10vh",
        }}
      >
        <Space>
          <div
            id="contact"
            style={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "100%",
              gap: "3.5rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <a href="https://github.com/ehayng1" target="_blank">
              <GithubOutlined style={{ fontSize: "4rem" }} />
            </a>

            <a href="mailto: yang6316@umn.edu" target="_blank">
              <MailOutlined style={{ fontSize: "4rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/sam-yang-a8b50a224/"
              target="_blank"
            >
              <LinkedinOutlined style={{ fontSize: "4rem" }} />
            </a>

            {/* <PhoneOutlined style={{ fontSize: "4rem" }} /> */}
          </div>
        </Space>
      </div>
    </Container>
  );
};

export default Home;
