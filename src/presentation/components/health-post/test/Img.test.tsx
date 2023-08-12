import { render, screen } from "@testing-library/react";
import Img from "../Img";
import styles from "../brief.module.css";

describe("Img Component", () => {
  it("should render the Img component with correct attributes", () => {
    const mockSrc = "https://sample-image.com/sample.jpg";

    render(<Img src={mockSrc} />);

    const imgElement = screen.getByAltText("health-post");

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockSrc);
    expect(imgElement).toHaveClass(styles.image);
  });
});
