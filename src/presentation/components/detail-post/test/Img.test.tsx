import { render, screen } from "@testing-library/react";
import Img from "../Img";
import styles from "../detail.module.css";

describe("Img Component", () => {
  it("should render the Img component with correct attributes", () => {
    const mockSrc = "https://sample-image.com/sample.jpg";

    render(<Img src={mockSrc} />);

    const imgElement = screen.getByAltText("cover content");

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockSrc);
    expect(imgElement).toHaveClass(styles.image);
  });
});
