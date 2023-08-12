import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TechPost from "..";
import { Article } from "../../../../domain/models";

describe("TechPost Component", () => {
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

  it("should render the TechPost component with correct content", () => {
    render(
      <MemoryRouter>
        {/* Wrap with MemoryRouter */}
        <TechPost index={0} article={mockArticle} />
      </MemoryRouter>
    );

    const imgElement = screen.getByAltText("tech-post");
    const infoTitleElement = screen.getByText(/Sample Title/i);
    const infoDateElement = screen.getByText(/12 August 2023/i);

    expect(imgElement).toBeInTheDocument();
    expect(infoTitleElement).toBeInTheDocument();
    expect(infoDateElement).toBeInTheDocument();
  });

  it("should render the TechPost component with dot icon", () => {
    render(
      <MemoryRouter>
        <TechPost index={1} article={mockArticle} />
      </MemoryRouter>
    );

    const dotIcon = screen.getByTestId("dot-icon");

    expect(dotIcon).toBeInTheDocument();
    expect(dotIcon).toHaveStyle({ color: "#5842FF" });
  });
});
