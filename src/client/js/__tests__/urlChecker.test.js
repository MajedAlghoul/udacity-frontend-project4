import urlChecker from "../urlChecker";

test("validates youtube.com as a valid url", () => {
  expect(urlChecker("youtube.com")).toBe(true);
});
