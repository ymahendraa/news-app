import { render } from "@testing-library/react";
import Img from "../Img";

describe("Img Component", () => {
  const mockSrc = "https://sample-image.com/sample.jpg";

  it("should render an image with the correct src and alt attribute", () => {
    const { getByAltText } = render(<Img src={mockSrc} />);

    const imgElement = getByAltText("popular-post");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockSrc);
  });
});
