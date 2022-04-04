import { getByText, render } from "@testing-library/react";
import NavBar from "../components/NavBar";


it("Should show about the team on the page", () => {
  const { getByText } = render(<NavBar />)
  const title = getByText(/SISIG FC/)
  
  expect(title).toBeInTheDocument()
});