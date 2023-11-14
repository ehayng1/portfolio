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

const Posture = ({ title, src }: ContactProps) => {
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
  let isTilted = false;
  let size = "75%";
  if (title === "Tilted Head") {
    size = "85%";
    isTilted = true;
  }
  return (
    <ContactContainer id={src}>
      {/* <Row justify="space-between" align="middle"> */}
      {/* <Row align="middle"> */}
      {/* <div style={{ display: "flex" }}> */}
      {}

      {/* <Col lg={5} md={11} sm={12} xs={12}> */}
      {/* <Slide direction="left"> */}
      {/* <Block title={title} content={content} /> */}
      <img
        style={{
          display: "block",
          width: size,
          height: size,
          borderRadius: 10,
          marginBottom: "1rem",
          marginTop: isTilted ? "-5%" : "",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        // width="400"
        src={src}
      ></img>
      {/* </Slide> */}
      <div
        style={{
          textAlign: "center",
          fontSize: "1.6rem",
          fontWeight: 600,
          fontFamily: "Motiva Sans Bold",
          color: "rgb(24, 33, 109)",
        }}
      >
        {title}
      </div>

      {/* </Col> */}

      {/* </div> */}
      {/* </Row> */}
    </ContactContainer>
  );
};

export default withTranslation()(Posture);
