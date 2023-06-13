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
      <Row align="middle">
        {/* <div style={{ display: "flex" }}> */}
        <Col lg={5} md={11} sm={24} xs={24}>
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
        <Col lg={18} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              {/* <Col span={24}> */}
              {/* Image #1 */}
              <div
                style={{
                  marginBottom: "2rem",
                  fontSize: "1.4rem",
                  color: "#18216d",
                  fontWeight: "700",
                }}
              >
                Hyunwoo Yang
              </div>
              <div
                style={{
                  fontFamily: "Motiva Sans Light",
                  fontSize: "1.1rem",
                  color: "#a8a8a8",
                  lineHeight: 1.41,
                  fontStyle: "italic",
                }}
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Sapien et ligula ullamcorper malesuada proin libero nunc
                consequat."
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
