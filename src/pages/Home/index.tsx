import { lazy, useEffect, useState } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import CustomContentBlock from "../../components/ContentBlock/ContentBlock/ContentBlock";
import ContactContent from "../../content/ContactContent.json";
import Introduction from "../../content/Introduction.json";
import { Button } from "../../common/Button";
import { Card, Col, Row } from "antd";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  const [firstLoad, setFirstLoad] = useState(true);

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
      <img
        onClick={() => scrollTo("intro")}
        data-aos="fade-up"
        data-aos-offset="400"
        // data-aos-delay="500"
        data-aos-delay="00"
        // data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        // data-aos-anchor-placement="top-top"
        style={{ marginLeft: "30%", marginTop: "0rem", overflow: "hidden" }}
        width="400"
        src="https://i.ibb.co/NrrrPS9/output-onlinegiftools.gif"
      ></img>
      <div
        data-aos="fade-up"
        data-aos-offset="00"
        data-aos-delay="3000"
        // data-aos-delay={firstLoad ? "3000" : "1000"}
        // data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        // data-aos-once="true"
        // data-aos-anchor-placement="top-center"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          // marginLeft: "30%",
          marginTop: "2.5rem",
          marginBottom: "10rem",
        }}
      >
        <a
          href="https://drive.google.com/u/0/uc?id=1aHnLzxJQCgwIhEkt6PItMkqobqobULnV&export=download"
          target="blank"
          style={{ width: "180px" }}
        >
          <Button>Download Here!</Button>
        </a>

        <Button color="white" onClick={() => scrollTo("learnMore")}>
          Learn More!
        </Button>
      </div>
      <div style={{ marginTop: "0rem" }} id="learnMore"></div>

      <div style={{ height: "15vh", width: "10%" }} id="overview"></div>
      <h6 id="overview">Overview</h6>
      <div style={{ height: "5vh", width: "10%" }} id=""></div>
      {/* <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      /> */}
      <div
        style={{
          fontSize: "2rem",
          color: "#2E186A",
          fontFamily: "Motiva Sans Bold",
        }}
        id="mission"
      >
        Project Mission
      </div>
      <div style={{ height: "5vh", width: "10%" }} id=""></div>
      <CustomContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      ></CustomContentBlock>
      <div style={{ height: "5vh", width: "10%" }} id=""></div>
      <div
        style={{
          fontSize: "2rem",
          color: "#2E186A",
          fontFamily: "Motiva Sans Bold",
        }}
        id="features"
      >
        Features
      </div>
      <div style={{ height: "5vh", width: "10%" }} id=""></div>
      <Row gutter={10} justify="space-around">
        <Col span={8}>
          <Card
            title={
              <span>
                <div>1. Turn Camera on!</div>
              </span>
            }
            bordered={false}
          >
            <div className="content">
              Click the “camera on” button to start collecting data. Click it
              again to stop collecting data!
            </div>
          </Card>
          <img
            width="100%"
            src="https://i.ibb.co/jW9VT1d/switch.gif"
            alt="img"
            style={{ backgroundColor: "white" }}
          ></img>
        </Col>
        {/* <Col span={4}></Col> */}
        <Col span={8}>
          <Card
            title={
              <span>
                {" "}
                <div>2. The Camera Tab</div>
              </span>
            }
            bordered={false}
          >
            <div className="content">
              Click the “Camera” tab to mirror your own posture. You could
              practice and train to sit straight!
            </div>
          </Card>
          <img
            width="100%"
            src="https://i.ibb.co/NrrrPS9/output-onlinegiftools.gif"
            alt="img"
            style={{ backgroundColor: "white" }}
          ></img>
        </Col>
        <div style={{ margin: "3rem", width: "100%" }}></div>
        <Col span={8}>
          <Card
            title={
              <span>
                {" "}
                <div>3. Dashboard Area</div>
              </span>
            }
            bordered={false}
          >
            <div className="content">
              While data are being collected, all the related statistics and
              numbers will show up at the dashboard area!
            </div>
          </Card>
          <img
            width="100%"
            src="https://i.pinimg.com/originals/c9/91/72/c99172c17b83d3c620b997858351b2a5.gif"
            alt="img"
          ></img>
        </Col>
        {/* <Col span={4}></Col> */}
        <Col span={8}>
          <Card
            title={
              <span>
                {" "}
                <div>4. Notification</div>
              </span>
            }
            bordered={false}
          >
            <div className="content">
              Sit straight will also notify you when bad posture persists or
              every 1 hour while using computer.
            </div>
          </Card>
          <img
            width="100%"
            src="https://i.pinimg.com/originals/7a/ab/d3/7aabd381c7f4d88a13abeac20ca25e56.gif"
            alt="img"
          ></img>

          {/* <img
            width="100%"
            src="https://i.ibb.co/WV0tsZb/noti.gif"
            alt="img"
          ></img> */}
        </Col>
      </Row>
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      <div style={{ height: "15vh", width: "10%" }} id="review"></div>
      <h6 id="">Reviews</h6>
      {
        <>
          <Contact
            title={ContactContent.title}
            content={ContactContent.text}
            id=""
          />
          <Contact
            title={ContactContent.title}
            content={ContactContent.text}
            id=""
          />
          <Contact
            title={ContactContent.title}
            content={ContactContent.text}
            id=""
          />
          <Contact
            title={ContactContent.title}
            content={ContactContent.text}
            id=""
          />
        </>
      }
    </Container>
  );
};

export default Home;
