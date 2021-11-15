import React from "react";
import { render, screen } from "@testing-library/react";
import PageHeading from "./PageHeading";

test("renders heading text", () => {
  render(<PageHeading headingText="Dashboard" />);
  const TextElement = screen.getByTestId("heading-1");
  expect(TextElement).toBeInTheDocument();
  expect(TextElement).toHaveTextContent("Dashboard");
});
