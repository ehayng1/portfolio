import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  t: any;
}
// the image of the review
const Block = ({ title, content, t }: Props) => {
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        {/* <Content>{t(content)}</Content> */}
        <div style={{ flexDirection: "row", display: "flex" }}>
          <div>
            <img
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
              // width="400"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            ></img>
          </div>

          {/* <div>
            <div>Title</div>
            <div>Content</div>
          </div> */}
        </div>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
