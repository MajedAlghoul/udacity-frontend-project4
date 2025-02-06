// Function that checks if a url is valid using regix
function checkForUrl(inputText) {
  if (!inputText || inputText.trim() === "") return false;

  //regix generated using AI
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" +
      "localhost|" +
      "\\d{1,3}(\\.\\d{1,3}){3})" +
      "(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*" +
      "(\\?[;&a-zA-Z\\d%_.~+=-]*)?" +
      "(\\#[-a-zA-Z\\d_]*)?$",
    "i"
  );

  return urlPattern.test(inputText.trim());
}

export default checkForUrl;
