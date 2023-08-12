import React from "react";
import { render, screen } from "@testing-library/react";
import HealthPost from "..";
import { Article } from "../../../../domain/models";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

describe("HealthPost Component", () => {
  const mockArticle: Article = {
    source: {
      id: "sourceId",
      name: "Sample Source",
    },
    author: "John Doe",
    title: "Sample Title",
    description: "Sample Description",
    url: "https://sample-url.com",
    urlToImage: "https://sample-image.com/sample.jpg",
    publishedAt: "2023-08-12T10:30:00Z",
    content: "Sample content",
  };

  it("should render the HealthPost component with correct content", () => {
    render(
      // Wrap HealthPost component with MemoryRouter
      <MemoryRouter>
        <HealthPost article={mockArticle} />
      </MemoryRouter>
    );

    const titleElement = screen.getByText(/Sample Title/i);
    const imgElement = screen.getByAltText("health-post");

    expect(titleElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      "https://sample-image.com/sample.jpg"
    );
  });

  // You can add more test cases as needed
});
