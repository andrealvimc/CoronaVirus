import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 100px;
  /* margin: auto; */
`;

export const Svg = styled.svg`
  animation: 2s linear infinite both rotateSvg;
  @keyframes rotateSvg {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

export const Circle = styled.circle`
  animation: 2s ease-in-out infinite both rotate;
  stroke-linecap: round;
  transform-origin: 50% 50%;
  stroke-dasharray: 75;
  stroke: #333;
  stroke-width: 6;
  fill: transparent;

  @keyframes rotate {
    0%,
    25% {
      stroke-dashoffset: getDashValue(45, 97%);
      transform: rotate(0);
    }
    50%,
    75% {
      stroke-dashoffset: getDashValue(45, 25%);
      transform: rotate(45deg);
    }
    100% {
      stroke-dashoffset: getDashValue(45, 97%);
      transform: rotate(360deg);
    }
  }

  @function getDashValue($rad, $percent) {
    $circumference: 2 * 3.14 * $rad;
    $decPercent: $percent / 100%;
    @return $circumference * $decPercent;
  }
`;
