import { fireEvent, getByText, render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider", () => {
  const setupComponent = () => {
    return render(
      <Slider
        onChange={jest.fn()}
        initialPrice={2}
        max={5}
        min={1}
        recommendedLimit={2.54}
      />
    );
  };

  const getSliderInput = () =>
    screen.getByTestId("element").childNodes[1] as HTMLInputElement;

  const getSliderThumb = () =>
    screen.getByTestId("element").childNodes[3] as HTMLDivElement;

  beforeEach(setupComponent);

  it("renders if slider component props is passed", () => {});

  it("renders recommendation", async () => {
    expect(screen.getByText(/2.54 - Recommended Pay/i)).toBeInTheDocument();
  });

  it("changes slider value", async () => {
    expect(getSliderInput()).toHaveValue("40");
    fireEvent.pointerDown(getSliderThumb());
    fireEvent.keyDown(getSliderThumb(), { which: 38 });
    expect(getSliderInput()).toHaveValue("40.2");
  });

  it("user change input value", async () => {
    const input = screen.getByTestId("move-input") as HTMLInputElement;
    expect(input).toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: "" },
    });

    expect(input.value).toBe("$");
    fireEvent.click(input);
  });
});
