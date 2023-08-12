import React from "react";
import { render, screen } from "@testing-library/react";
import Img from "../Img"; // Adjust the import path based on your project structure

describe("Img Component", () => {
  it("should render the Img component with correct attributes", () => {
    const mockSrc = "https://sample-image.com/sample.jpg";
    render(<Img src={mockSrc} />);

    const imgElement = screen.getByAltText("tech-post");

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockSrc);
    expect(imgElement).toHaveAttribute("width", "80");
    expect(imgElement).toHaveAttribute("height", "80");
  });

  // You can add more test cases as needed
});
