import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the floating portfolio agent button", () => {
  render(<App />);
  expect(screen.getByLabelText(/open portfolio agent/i)).toBeInTheDocument();
});
