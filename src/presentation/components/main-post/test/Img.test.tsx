import { render } from "@testing-library/react";
import Img from "../Img";

describe("Img Component", () => {
  it("should render an image with the given source", () => {
    const src = "test-image.jpg";
    const { container } = render(<Img src={src} />);

    const imgElement = container.querySelector("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement?.getAttribute("src")).toBe(src);
    expect(imgElement?.getAttribute("alt")).toBe("main");
  });

  it("should have the correct className", () => {
    const src = "test-image.jpg";
    const { container } = render(<Img src={src} />);

    const imgElement = container.querySelector("img");
    expect(imgElement).toHaveClass("image");
  });
});
