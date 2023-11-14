import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      {/* <Row justify="space-between" align="middle"> */}
      <Row align="middle" justify="center" style={{ marginBottom: "10vh" }}>
        {/* <div style={{ display: "flex" }}> */}
        <Col lg={6} md={6} sm={12} xs={12}>
          <Slide direction="left">
            {/* <Block title={title} content={content} /> */}
            <img
              style={{
                width: "50%",
                height: "50%",
                borderRadius: 10,
                marginBottom: "1rem",
              }}
              // width="400"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            ></img>
          </Slide>
        </Col>
        <Col lg={18} md={12} sm={12} xs={12}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              {/* <Col span={24}> */}
              {/* Image #1 */}
              <div
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1.4rem",
                  color: "#18216d",
                  fontWeight: "700",
                }}
              >
                Full Stack Developer
              </div>
              <div
                style={{
                  // marginBottom: "2rem",
                  fontSize: "1.1rem",
                  color: "#5f5e5e",
                  fontFamily: "Motiva Sans Light",
                }}
              >
                LognCoding
              </div>
              <div
                style={{
                  marginBottom: "2rem",
                  fontSize: "1rem",
                  color: "#5f5e5e",
                  fontFamily: "Motiva Sans Light",
                }}
              >
                Jan 2023 - August 2023
              </div>

              <div
                style={{
                  fontFamily: "Motiva Sans Light",
                  fontSize: "1.1rem",
                  color: "#535252",
                  lineHeight: 1.41,
                  fontStyle: "italic",
                }}
              >
                Spearheaded diverse projects encompassing web, mobile, and
                desktop applications including Funducate, Liserve, SitStraight
                and many more.
              </div>
              {/* <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                /> 
                <ValidationType type="name" />*/}
              {/* </Col> */}
              {/* <Col span={24}> */}
              {/* Image #2 */}
              <div>
                {" "}
                {/* Sapien et ligula ullamcorper malesuada proin libero nunc
                  consequat. Id venenatis a condimentum vitae sapien. */}
              </div>
              {/* <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" /> */}
              {/* </Col>
            <Col span={24}> */}
              {/* Image #3 */}
              <div>
                {" "}
                {/* Et netus et malesuada fames ac turpis. Auctor eu augue ut
                  lectus arcu bibendum at. Ultrices tincidunt arcu non sodales
                  neque sodales ut etiam.{" "} */}
              </div>
              {/* <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" /> */}
              {/* </Col> */}
              {/* <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer> */}
            </FormGroup>
          </Slide>
        </Col>
        {/* </div> */}
      </Row>

      <Row align="middle" justify="center" style={{ marginBottom: "10vh" }}>
        {/* <div style={{ display: "flex" }}> */}
        <Col lg={6} md={6} sm={12} xs={12}>
          <Slide direction="left">
            {/* <Block title={title} content={content} /> */}
            <img
              style={{
                width: "50%",
                height: "50%",
                borderRadius: 10,
                marginBottom: "1rem",
              }}
              // width="400"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            ></img>
          </Slide>
        </Col>
        <Col lg={18} md={12} sm={12} xs={12}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              {/* <Col span={24}> */}
              {/* Image #1 */}
              <div
                style={{
                  marginBottom: "0.5rem",
                  fontSize: "1.4rem",
                  color: "#18216d",
                  fontWeight: "700",
                }}
              >
                Research Assistant
              </div>
              <div
                style={{
                  // marginBottom: "2rem",
                  fontSize: "1.1rem",
                  color: "#5f5e5e",
                  fontFamily: "Motiva Sans Light",
                }}
              >
                University of Minnesota, September 2023 - Present
              </div>
              <div
                style={{
                  marginBottom: "2rem",
                  fontSize: "1rem",
                  color: "#5f5e5e",
                  fontFamily: "Motiva Sans Light",
                }}
              >
                September 2023 - Present
              </div>
              <div
                style={{
                  fontFamily: "Motiva Sans Light",
                  fontSize: "1.1rem",
                  color: "#535252",
                  lineHeight: 1.41,
                  fontStyle: "italic",
                }}
              >
                I'm developing a Graph Neural Network (GNN) visualizer that aims
                to represent GNN models within a web environment. Leveraging the
                power of PyTorch, ONNX, and React, the goal is to create an
                intuitive and interactive platform for visualizing intricate
                graph-based neural networks.
              </div>

              {/* <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                /> 
                <ValidationType type="name" />*/}
              {/* </Col> */}
              {/* <Col span={24}> */}
              {/* Image #2 */}
              <div>
                {" "}
                {/* Sapien et ligula ullamcorper malesuada proin libero nunc
                  consequat. Id venenatis a condimentum vitae sapien. */}
              </div>
              {/* <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" /> */}
              {/* </Col>
            <Col span={24}> */}
              {/* Image #3 */}
              <div>
                {" "}
                {/* Et netus et malesuada fames ac turpis. Auctor eu augue ut
                  lectus arcu bibendum at. Ultrices tincidunt arcu non sodales
                  neque sodales ut etiam.{" "} */}
              </div>
              {/* <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" /> */}
              {/* </Col> */}
              {/* <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer> */}
            </FormGroup>
          </Slide>
        </Col>
        {/* </div> */}
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
