import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Routes, Route } from "react-router";
import FeaturedCard from "./FeaturedCard";

test("renders a card with a given name", async () => {
  render(<FeaturedCard name={"park"} />);
  const title = await screen.findByText("park");
  expect(title).toBeVisible();
});
