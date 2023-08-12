import React from "react";
import { render, screen } from "@testing-library/react";
import PostArticle from "..";
import dayjs from "dayjs";

describe("PostArticle Component", () => {
  it("should render the PostArticle component with correct content", () => {
    const mockArticle = {
      author: "John Doe",
      title: "Sample Title",
      createdDate: "2023-08-12T10:30:00Z",
      content: "Sample content",
      url: "https://sample-url.com",
    };

    render(
      <PostArticle
        author={mockArticle.author}
        title={mockArticle.title}
        createdDate={mockArticle.createdDate}
        content={mockArticle.content}
        url={mockArticle.url}
      />
    );

    const authorElement = screen.getByText(/John Doe/i);
    const titleElement = screen.getByText(/Sample Title/i);
    const dateElement = screen.getByText(/12 August 2023/i);
    const contentElement = screen.getByText(/Sample content/i);
    const linkElement = screen.getByText(/see full article/i);

    expect(authorElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockArticle.url);
    expect(linkElement).toHaveAttribute("target", "_blank");
  });

  // You can add more test cases as needed
});
