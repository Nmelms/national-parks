import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ActivityCard from "./ActivityCard";

test("renders a card component with given name", async () => {
  render(<ActivityCard title="park" />);
  const title = await screen.findByText("park");
  expect(title).toBeVisible();
});
