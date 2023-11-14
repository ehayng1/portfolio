import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";
import { NotHidden } from "../../Header/styles";

const CustomContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
  vid,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            {vid === undefined ? (
              <SvgIcon src={icon} width="100%" height="100%" />
            ) : (
              <div style={{}}>
                <iframe
                  width="100%"
                  height="400rem"
                  // height="315"
                  src={vid}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              {/* <h6>{t(title)}</h6> */}
              <Content>
                {t(content)}
                <div
                  style={{
                    marginTop: "1rem",
                    fontWeight: "800",
                    fontSize: "1rem",
                  }}
                >
                  ** Current version of Sit Straight detects posture based on
                  the location of the face. Future versions of Sit Straight will
                  detect different postures of back and waist. Please contact me
                  for collaboration!
                </div>
              </Content>

              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(CustomContentBlock);
