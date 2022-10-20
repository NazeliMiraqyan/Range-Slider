import styled from "styled-components";
import RangeSlider from "react-range-slider-input";

const SLIDER_WIDTH = 1000;
const THUMB_WIDTH = 24;

export const Wrapper = styled.div`
  width: ${SLIDER_WIDTH}px;
  margin: 0 auto;
  margin-top: 65px;
  position: relative;
  font-family: "Merriweather", serif;
  font-weight: bold;
`;

export const Prices = styled.div`
  width: 110%;
  display: flex;
  justify-content: space-between;
  transform: translateX(-7.2%);
  position: relative;
  top: -21px;
  margin-top: -25px;
`;

export const InputBorderLeft = styled.div`
  content: "";
  width: 2px;
  height: 20px;
  background-color: ${(props) => props.theme.colors?.gray};
  right: 0;
  z-index: -1px;
  display: block;
  top: -2px;
`;

export const InputBorderRight = styled.div`
  content: "";
  width: 2px;
  height: 20px;
  background-color: ${(props) => props.theme.colors?.gray};
  float: right;
  z-index: -1px;
  position: relative;
  display: block;
  top: -24px;
`;

export const InputBorderCenter = styled.div`
  content: "";
  width: 2px;
  height: 24px;
  background-color: ${(props) => props.theme.colors?.gray};
  float: left;
  z-index: -1px;
  position: relative;
  display: block;
  top: -24px;
  left: 35px;
`;

export const Input = styled.input<{ $progress: number }>`
  position: absolute;
  width: 50px;
  top: -53px;
  right: 0;
  left: ${({ $progress }) =>
    `${((SLIDER_WIDTH - THUMB_WIDTH) * $progress) / 100}px`};
  padding: 4px 15px;
  text-align: center;
  font-size: 19px;
  transform: translateX(calc(-50% + 14px));
  font-family: "Merriweather", serif;
  font-weight: bold;

  &:focus {
    outline: none;
    border: 3px solid ${({ theme }) => theme.colors?.green};
  }
`;

export const Recommended = styled.div`
  font-size: 13px;
  border: 1px solid ${(props) => props.theme.colors?.dusty_gray};
  padding: 0 5px;
  transform: translateX(15%);
  text-align: center;
`;
export const Recommended_text = styled.p`
  text-align: center;
`;
export const Triangle = styled.div`
  width: 0;
  height: 0;
  transform: translateX(332%);
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid ${(props) => props.theme.colors?.dusty_gray};
`;

export const Slider = styled(RangeSlider)<{ $changeColor: boolean }>`
  border-radius: 0;

  .range-slider {
    &__thumb[data-lower] {
      width: 0;
    }
    &__thumb {
      background: ${(props) => props.theme.colors?.dark_gray} !important;
    }
    &__range {
      border-radius: 0;
      background-color: ${(props) =>
        ({ $changeColor }) =>
          $changeColor ? props.theme.colors?.red : props.theme.colors?.blue};
    }
  }
`;
