import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("should App display initial value = 0", () => {
  let expectedResult = "0";
  render(<App />);
  // const result = screen.getByTestId("count-result").textContent;
  //   screen.getByTestId("count-result").toHaveTextContent('0')
  expect(screen.getByTestId("count-result")).toHaveTextContent(expectedResult);
  //   expect(screen.getByText(title)).toBeInTheDocument();
});

test("should App display increment from 0", () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText("increment"));
  expect(screen.getByTestId("count-result")).toHaveTextContent("1");
});

test("should App display result 0 after reset", () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText("reset"));
  expect(screen.getByTestId("count-result")).toHaveTextContent("0");
});

test("display Hidden if user not click Hidden", () => {
  const { getByText } = render(<App />);
  expect(getByText("Content Hidden")).toBeInTheDocument();
});

test("display Show if user click Hidden", () => {
  const { getByTestId, getByText } = render(<App />);
  const hiddenButton = getByTestId(`hidden-button`);

  //FIXME: use this
  //   hiddenButton.click();
  // or
  fireEvent.click(hiddenButton);
  expect(getByText("Content Show")).toBeInTheDocument();
});

test("input by use find placeholder", async () => {
  let expectedResult = "Hi Min";
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/test-input/);
  fireEvent.change(inputElement, { target: { value: expectedResult } });

  //FIXME: use this
  expect(screen.getByText(expectedResult)).toBeInTheDocument();
  //or
  expect(screen.getByTestId("input-result")).toHaveTextContent(expectedResult);
});
