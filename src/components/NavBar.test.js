import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";
import "../index.css";

test("renders navbar component", async () => {
  render(<NavBar />, { wrapper: MemoryRouter });
  const navbarTitle = screen.getByText("NATIONAL PARKS");
  expect(navbarTitle).toBeInTheDocument();
});

test("shows dropDownContent when menuIcon is clicked", async () => {
  render(<NavBar />, { wrapper: MemoryRouter });
  const dropDown = screen.getByTestId("dropDownContent");
  expect(dropDown).not.toHaveClass("showDropDown");
  const menuIcon = screen.getByTestId("menuIcon");
  fireEvent.click(menuIcon);
  expect(dropDown).toHaveClass("showDropDown");
});
