import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, radius }: SvgIconProps) => (
  <img
    src={`/img/svg/${src}`}
    alt={src}
    width={width}
    height={height}
    style={{ borderRadius: radius }}
  />
);
