/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Slide = ({ content, width, height }) => (
  <div
    css={css`
      height: 700px;
      width: ${width}px;
      background-image: url("${content}");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
);

export default Slide;
