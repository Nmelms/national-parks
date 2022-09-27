import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Routes, Route } from "react-router";
import Footer from "./Footer";

test("renders footer text", async () => {
  render(<Footer />);
  const footerText = await screen.findByText(
    "Made possible by the National Park API"
  );
  expect(footerText).toBeVisible();
});
