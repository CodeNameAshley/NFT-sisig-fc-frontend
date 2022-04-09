import { getByText, render } from "@testing-library/react";
import ProfilePage from "../components/ProfilePage"


it("Should show about the team on the page", () => {
  const { getByText } = render(<ProfilePage />)
  const title = getByText(/Your Profile/)
  
  expect(title).toBeInTheDocument()
});