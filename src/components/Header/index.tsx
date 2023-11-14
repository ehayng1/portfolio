import { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  MenuItems,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    // Delay the header visibility to simulate gradual appearance
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const showDrawer = () => {
    setVisibility(true);
  };

  const onClose = () => {
    setVisibility(false);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

    return (
      <MenuItems
        style={{
          opacity: headerVisible ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
        <HashLink to="/Home#intro">
          <Span
            style={{
              fontSize: "1.4rem",
              marginRight: "1rem",
              // fontFamily: "Motiva Sans Bold",
            }}
          >
            {t("Home")}
          </Span>
        </HashLink>
        <HashLink to="/Home#project">
          <Span
            style={{
              fontSize: "1.4rem",
              marginRight: "1rem",
              // fontFamily: "Motiva Sans Bold",
            }}
          >
            {t("Projects")}
          </Span>
        </HashLink>
        <HashLink to="/Home#work">
          <Span
            style={{
              fontSize: "1.4rem",
              marginRight: "1rem",
              // fontFamily: "Motiva Sans Bold",
            }}
          >
            {t("Work")}
          </Span>
        </HashLink>
        <HashLink to="/Home#contact">
          <Span style={{ fontSize: "1.4rem" }}>{t("Contact")}</Span>
        </HashLink>
      </MenuItems>
    );
  };

  return (
    <HeaderSection
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: "white",
        opacity: headerVisible ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            {/* Logo Image */}
            {/* <img
              src="/img/icons/logo1.png"
              width="85px"
              height="85px"
              style={{ marginRight: "2rem" }}
              alt="Logo"
            /> */}
            {/* Logo goes here */}
            {/* <div
              style={{
                color: "#2E186A",
                fontSize: "1.8rem",
                textAlign: "center",
                fontFamily: "Motiva Sans Bold",

                marginTop: "1rem",
              }}
            >
              Sit Straight
            </div> */}
          </LogoContainer>

          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              {/* <Col span={12}>
                <Outline />
              </Col> */}
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
