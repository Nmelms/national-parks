import React, { useState } from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import Parks from "./Parks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import axios from "axios";
import App from "../App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// const setState = jest.fn();
// const useStateSpy = jest.spyOn(React, "useState");
// useStateSpy.mockImplementation((init) => [init, setState]);
// const mockSetState = jest.fn();

// jest.mock("react", () => ({
//   useState: (initial) => [initial, mockSetState],
// }));

const response = rest.get(
  `https://developer.nps.gov/api/v1/parks`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 1,
            fullName: "Rocky",
            status: "Active",
            images: [{ url: "fakeurl.com" }],
            parkCode: "AK",
          },
        ],
      })
    );
  }
);

// const noResponse = rest.get(
//   `https://developer.nps.gov/api/v1/webcams`,
//   (req, res, ctx) => {
//     return res(ctx.status(500));
//   }
// );

const handlers = [response];

const server = new setupServer(...handlers);

test("should render placeholder image", async () => {
  render(<Parks />, { wrapper: MemoryRouter });
  const placeholder = await screen.findByText(
    "Select a state to start exploring."
  );
  expect(placeholder).toBeInTheDocument();
});

test("render parks after making a selection", async () => {
  render(<Parks />, { wrapper: MemoryRouter });
  const dropDown = screen.getByTestId("dropDown");
  fireEvent.change(dropDown, { target: { value: "VA" } });
  const title = await screen.findByText("Rocky");
  const placeholder = screen.queryByText("Select a state to start exploring.");
  expect(placeholder).not.toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("renders card after clicking", async () => {
  const setSelectedParkData = jest.fn();
  setSelectedParkData.mockImplementationOnce(() => {
    name: "nick";
  });
  render(<Parks setSelectedParkData={setSelectedParkData} />, {
    wrapper: MemoryRouter,
  });
  const dropDown = screen.getByTestId("dropDown");
  userEvent.click(dropDown);
  const title = await screen.findByText("Alaska");
  fireEvent.change(dropDown, { target: { value: "AK" } });
  const text = await screen.findByText("Rocky");
  const card = screen.getByTestId("card");
  expect(card).toBeInTheDocument();
  fireEvent.click(card);
  console.log(setSelectedParkData);
  expect(setSelectedParkData).toHaveBeenCalledTimes(1);
});
