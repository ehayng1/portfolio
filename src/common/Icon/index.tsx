import { SvgIconProps } from "../types";

export const Icon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/icons/${src}`} alt={src} width={width} height={height} />
);
