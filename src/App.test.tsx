import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders header with my name", () => {
  const { getByText } = render(<App />);
  const nameDisplay = getByText(/Jonathan Newman/i);
  expect(nameDisplay).toBeInTheDocument();
});
