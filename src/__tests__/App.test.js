import { cleanup, render } from "@testing-library/react";
import App from "../components/App";
import { unmountComponentAtNode } from "react-dom";

let container = null


beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Should take a snapshot", () => {
  const {asFragment} = render(<App />);
  
  expect(asFragment(<App />)).toMatchSnapshot()
});