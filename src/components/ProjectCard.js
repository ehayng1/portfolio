import { Card, Col, Row } from "antd";
import { lazy, useEffect, useState } from "react";
import { SvgIcon } from "../common/SvgIcon";
import TechBubble from "./TechBubble/TechBubble";
import {
  ShareAltOutlined,
  AppleOutlined,
  AndroidOutlined,
  WindowsOutlined,
  ChromeOutlined,
  LinkOutlined,
  IeOutlined,
  GithubOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

export function ProjectCard({
  projectName,
  description,
  src,
  Techs,
  url,
  width,
  height,
  alignment,
  links,
}) {
  const textColor = "#18216d";
  const [isHovered, setIsHovered] = useState(true);

  return (
    <Card
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px lightgray solid",
      }}
      //   onMouseEnter={() => setIsHovered(true)}
      //   onMouseLeave={() => setIsHovered(false)}
      //   bordered={true}
    >
      {isHovered ? (
        <div style={{ marginLeft: "0rem", marginRight: "0rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                flex: 1,
                color: textColor,
                fontFamily: "Motiva Sans Bold",
              }}
            >
              {projectName}
            </div>

            <Space>
              {/* <ShareAltOutlined /> */}
              {links.web && (
                <a href={links.web} target="_blank">
                  <IeOutlined style={{ fontSize: "1.5rem" }} />
                </a>
              )}
              {links.apple && (
                <a href={links.apple} target="_blank">
                  <AppleOutlined style={{ fontSize: "1.5rem" }} />
                </a>
              )}
              {links.google && (
                <a href={links.google} target="_blank">
                  <AndroidOutlined style={{ fontSize: "1.5rem" }} />
                </a>
              )}
              {links.windows && (
                <a href={links.windows} target="_blank">
                  <WindowsOutlined style={{ fontSize: "1.5rem" }} />
                </a>
              )}

              {links.github && (
                <a href={links.github} target="_blank">
                  <GithubOutlined style={{ fontSize: "1.5rem" }} />
                </a>
              )}
              {/* {links.apple && <AppleOutlined style={{ fontSize: "1.2rem" }} />} */}
            </Space>
            {/* <div>Apple</div>
            <div>Google</div> */}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: alignment,
              alignItems: alignment,
              // minHeight: "200vh",
            }}
          >
            {src ? (
              <SvgIcon src={src} width={width} height={height} radius="10px" />
            ) : (
              <a href={links.main} target="_blank">
                <img
                  //   style={{ marginLeft: "auto", marginRight: "auto" }}
                  width={"200vw"}
                  height={"180vh"}
                  // minHeight={"5vh"}
                  // maxHeight="10vh"
                  src={url}
                  style={{ borderRadius: "10px", minHeight: "5vh" }}
                ></img>
              </a>
            )}
          </div>

          <div
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            {description}
          </div>
          {/* <div style={{ display: "flex", gap: "1rem" }}>
                  <div> Apple Store</div>
                  <div> Google Play</div>
                </div> */}
          <TechBubble Techs={Techs}></TechBubble>
        </div>
      ) : (
        //   (src ? (
        //     <SvgIcon src={src} width="50%" height="50%" radius="10px" />
        //   ) : (
        //     <img src={url}></img>
        //   ))
        <img
          //   onMouseEnter={() => setIsHovered(true)}
          //   onMouseLeave={() => setIsHovered(false)}
          //   width="50%"
          //   height={"20%"}
          src={src ? `/img/svg/${src}` : url}
          style={{
            // backgroundColor: "white",
            // margin: "auto",
            maxHeight: "40vh",
            borderRadius: "10px",
          }}
        ></img>
      )}
    </Card>
  );
}
