import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import Webcams from "./Webcams";
import { rest } from "msw";
import { setupServer } from "msw/node";
import axios from "axios";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const response = rest.get(
  `https://developer.nps.gov/api/v1/webcams`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 1,
            title: "Rocky",
            status: "Active",
            images: { url: "fakeurl.com" },
          },
          {
            id: 1,
            title: "Rocky",
            status: "Active",
            images: { url: "fakeurl.com" },
          },
        ],
      })
    );
  }
);

const noResponse = rest.get(
  `https://developer.nps.gov/api/v1/webcams`,
  (req, res, ctx) => {
    return res(ctx.status(500));
  }
);

const handlers = [response, noResponse];

const server = new setupServer(...handlers);

test("shoud fetch webcams and render", async () => {
  render(<Webcams />, { wrapper: MemoryRouter });
  const card = await screen.findAllByText("Rocky");
  expect(card).toHaveLength(2);
});

test("should fail gracefully", async () => {
  server.use(noResponse);
  render(<Webcams />, { wrapper: MemoryRouter });
  const error = await screen.findByText("opps come back later");
  expect(error).toBeInTheDocument();
});
