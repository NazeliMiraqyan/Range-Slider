import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  const setupComponent = () => {
    render(<App />);
  };

  beforeEach(setupComponent);

  it("render App", async () => {
    const Slider = screen.getByTestId("move-input");
    expect(Slider).toBeInTheDocument();
  });
});
