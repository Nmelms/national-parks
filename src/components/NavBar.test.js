import NavBar from "./NavBar";
import { cleanup, render, screen } from "@testing-library/react";
afterEach(cleanup);

test("Renders NavBar", () => {
  const { container } = render(<NavBar />);
  expect(container.getElementsByClassName("nav").length).toBe(1);
});

test("drop down appears on click", () => {
  render(<NavBar />);
});
