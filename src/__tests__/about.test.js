import { getByText, render } from "@testing-library/react";
import About from "../components/About";


it("Should show about the team on the page", () => {
  const {getByText} = render(<About />)
  const title = getByText(/About the team/)
  
  expect(title).toBeInTheDocument()
});