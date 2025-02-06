// handleSubmit.test.js
import { handleSubmit } from "../formHandler"; // Function to test
import urlChecker from "../urlChecker"; // Mock the URL checker module

jest.mock("../urlChecker"); // Mocking the checkForUrl function

test("shows alert when the URL is invalid", async () => {
  // Mock the return value of checkForUrl
  urlChecker.mockReturnValue(false); // Simulating an invalid URL

  global.alert = jest.fn(); // Mocking the alert function

  // Create a mock input element
  document.body.innerHTML = `
      <form>
        <input type="text" id="name" value="invalid-url" />
      </form>
    `;

  // Mock the event
  const event = { preventDefault: jest.fn() };

  // Call handleSubmit with the mock event
  await handleSubmit(event);

  // Check if alert was called with the correct message
  expect(global.alert).toHaveBeenCalledWith("Enter a valid Url");
});
