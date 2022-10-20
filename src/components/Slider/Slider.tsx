import React, { ChangeEvent, useState, useEffect } from "react";
import { PostPreviewProps } from "./types";
import * as S from "./Slider.styled";

const Slider: React.FC<PostPreviewProps> = ({
  initialPrice = 1,
  onChange,
  max = 5,
  min = 0.01,
  recommendedLimit = 0.14,
}) => {
  const initialPercentage = (initialPrice / max) * 100;

  const [value, setValue] = useState<number[]>([0, initialPercentage]);
  const [inputValue, setInputValue] = useState<string>(
    String(initialPrice.toFixed(2))
  );

  const [, currentPercentage] = value;
  const isBelowRecommended = Number(inputValue) <= recommendedLimit;

  const handleChange = (newValue: [number, number]) => {
    setValue(newValue);

    setInputValue(((newValue[1] * max) / 100).toFixed(2));
  };

  useEffect(() => {
    if (onChange) {
      const currentPrice = (currentPercentage - max) / 100;

      onChange(currentPrice);
    }
  }, [currentPercentage, max, onChange]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.slice(1);
    const numberValue = Number(inputValue);

    if (!isNaN(numberValue)) {
      const currentValue = Math.min(numberValue, max);
      const newSliderValue = (currentValue / max) * 100;

      setInputValue(inputValue);
      setValue([value[0], newSliderValue]);
    }
  };

  return (
    <S.Wrapper>
      <S.Input
        value={`$${inputValue}`}
        onChange={handleInputChange}
        $progress={currentPercentage}
        data-testid="move-input"
      />
      <S.Slider
        value={value}
        step={0.2}
        min={min}
        $changeColor={isBelowRecommended}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
        onInput={handleChange}
      />
      <S.InputBorderLeft />
      <S.InputBorderCenter />
      <S.InputBorderRight />
      <S.Prices>
        <div>
          <S.Triangle></S.Triangle>
          <S.Recommended>
            <S.Recommended_text>
              ${recommendedLimit} - Recommended Pay
            </S.Recommended_text>
          </S.Recommended>
        </div>
        <p>${max}.00</p>
      </S.Prices>
    </S.Wrapper>
  );
};

export default Slider;
