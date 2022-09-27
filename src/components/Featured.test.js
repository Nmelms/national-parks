import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Featured from "./Featured";
import SelectedPark from "./SelectedPark";

const featuredParks = [
  {
    fullName: "park",
    parkCode: "abc",
    key: 1,
    images: [{ url: "fakeUrl" }, { url: "fakeUrl" }],
  },
  { fullName: "park", key: 2, images: [{ url: "fakeUrl" }] },
  { fullName: "park", key: 3, images: [{ url: "fakeUrl" }] },
];

const selectedParkData = {
  fullName: "park",
  parkCode: "abc",
  key: 1,
  images: [{ url: "fakeUrl" }, { url: "fakeUrl" }, { url: "fakeUrl" }],
  addresses: [{ city: "fakeCity" }],
  entranceFees: [{ cost: 0 }],
  contacts: {
    phoneNumbers: [{ phoneNumber: 333 - 444 - 5555 }],
  },
  activities: ["todo", "todo"],
};

const allData = {
  data: [
    {
      fullName: "park",
      parkCode: "abc",
      key: 1,
      images: [{ url: "fakeUrl" }, { url: "fakeUrl" }],
    },
    {
      fullName: "park",
      parkCode: "abdc",
      key: 1,
      images: [{ url: "fakeUrl" }],
    },
  ],
};

const setSelectedParkData = jest.fn();

test("renders a title", async () => {
  render(<Featured featuredParks={featuredParks} />, { wrapper: MemoryRouter });
  const title = await screen.findByText("Featured Parks");
  expect(title).toBeVisible();
});

test("renders 3 card components", async () => {
  render(<Featured featuredParks={featuredParks} />, {
    wrapper: MemoryRouter,
  });
  const parks = await screen.findAllByText("park");
  expect(parks).toHaveLength(3);
});

test("when user clicks on a card it redirects to park component", async () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Featured
              setSelectedParkData={setSelectedParkData}
              allData={allData}
              featuredParks={featuredParks}
            />
          }
        />
        <Route
          path="/Selected"
          element={<SelectedPark selectedParkData={selectedParkData} />}
        />
      </Routes>
    </MemoryRouter>
  );

  const card = screen.getAllByTestId("featuredCard");
  userEvent.click(card[0]);
  const location = await screen.findByText("Location:");
  expect(location).toBeVisible();
});
