import { fireEvent, render, screen } from "@testing-library/react";
import Slider from "./Slider";
import { PostPreviewProps } from "./types";

describe("Slider", () => {
  const setupComponent = (props: PostPreviewProps = {}) => {
    return render(
      <Slider
        onChange={jest.fn()}
        initialPrice={2}
        max={5}
        min={1}
        recommendedLimit={2.54}
        {...props}
      />
    );
  };

  const getSliderInput = () =>
    screen.getByTestId("element").childNodes[1] as HTMLInputElement;

  const getSliderThumb = () =>
    screen.getByTestId("element").childNodes[3] as HTMLDivElement;

  beforeEach(setupComponent);

  it("sets default prop values", () => {
    setupComponent({
      onChange: undefined,
      initialPrice: undefined,
      max: undefined,
      min: undefined,
      recommendedLimit: undefined,
    });
    expect(screen.getAllByTestId("element")[0]).toBeInTheDocument();
  });

  it("renders recommendation", async () => {
    expect(screen.getByText(/2.54 - Recommended Pay/i)).toBeInTheDocument();
  });

  it("changes slider value", async () => {
    expect(getSliderInput()).toHaveValue("40");
    fireEvent.pointerDown(getSliderThumb());
    fireEvent.keyDown(getSliderThumb(), { which: 38 });
    expect(getSliderInput()).toHaveValue("40.2");
  });

  it("handles input change correctly", async () => {
    const input = screen.getByTestId("move-input") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    fireEvent.change(input, {
      target: { value: "$2.45" },
    });
    expect(input.value).toBe("$2.45");
    fireEvent.change(input, {
      target: { value: "$asd" },
    });
    expect(input.value).toBe("$2.45");
  });
});
