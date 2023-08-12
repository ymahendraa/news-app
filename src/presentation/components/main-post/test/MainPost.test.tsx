import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import MainPost from ".."; // Adjust the import path based on your project structure
import { Article } from "../../../../domain/models";

describe("MainPost Component", () => {
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

  it("should render the MainPost component with correct content", () => {
    const { getByText, getByAltText } = render(
      // Wrap the component with MemoryRouter
      <MemoryRouter>
        <MainPost article={mockArticle} />
      </MemoryRouter>
    );

    const titleElement = getByText(/Sample Title/i);
    const descriptionElement = getByText(/Sample Description/i);
    const dateElement = getByText(/12 August 2023/i);
    const imgElement = getByAltText("main");

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      "https://sample-image.com/sample.jpg"
    );
  });
});
