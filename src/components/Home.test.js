import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Routes, Route } from "react-router";
import userEvent from "@testing-library/user-event";
import Parks from "./Parks";
import Webcams from "./Webcams";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

const featuredParks = jest.fn();

test("renders a home component with an explore button", async () => {
  render(<Home featuredParks={featuredParks} />, { wrapper: MemoryRouter });
  const explore = await screen.findByText("Explore Parks");
  expect(explore).toBeVisible();
});

test("it redirects to parks page when you cllick on button", async () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home featuredParks={featuredParks} />} />
        <Route path="/Parks" element={<Parks />} />
      </Routes>
    </MemoryRouter>
  );
  const explore = await screen.findByText("Explore Parks");
  userEvent.click(explore);
  const text = await screen.findByText("Select a state to start exploring.");
  expect(text).toBeInTheDocument();
});

test("it redirects to webcams page when you click on explore button", async () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home featuredParks={featuredParks} />} />
        <Route path="/webcams" element={<Webcams />} />
      </Routes>
    </MemoryRouter>
  );
  const webcams = screen.getByTestId("webcams");
  userEvent.click(webcams);
  const text = screen.getByRole("heading", { name: /nature cams/i });
  expect(text).toBeInTheDocument();
});

test("it redirects to parks page when you click explore div at bottom of screen", async () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home featuredParks={featuredParks} />} />
        <Route path="/Parks" element={<Parks />} />
      </Routes>
    </MemoryRouter>
  );
  const parkDiv = screen.getByTestId("parks");
  userEvent.click(parkDiv);
  const text = await screen.findByText("Select a state to start exploring.");
  expect(text).toBeInTheDocument();
});
