import { getByText, render } from "@testing-library/react";
import About from "../components/About";


it("Should show about the team on the page", () => {
  const { getByText } = render(<About />)
  const title = getByText(/About the team/)
  
  expect(title).toBeInTheDocument()
});

it("Should have a description on the page", () => {
  const { getByText } = render(<About />)
  const description = getByText(/Placeholder description/)

  expect(description).toBeInTheDocument()
})