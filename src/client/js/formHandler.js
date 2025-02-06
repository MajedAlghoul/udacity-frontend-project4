import axios from "axios";
import checkForUrl from "./urlChecker";

// express server URL
const serverURL = "http://localhost:8000/api";

const articleText = document.getElementById("results-text");
const articleTitle = document.getElementById("results-title");
const articlePolarity = document.getElementById("results-stats-polarity");
const articlePolarityPercent = document.getElementById(
  "results-stats-polarity-percent"
);
const articleField = document.getElementById("results-stats-field");
const articleFieldPercent = document.getElementById(
  "results-stats-field-percent"
);

// function that handles form submission
async function handleSubmit(event) {
  event.preventDefault();

  // Get the URL from the input field
  const formText = document.getElementById("name").value;

  // Check if the URL is valid
  const result = checkForUrl(formText);

  // If the URL is valid, send it to the server using the serverURL constant above
  if (result) {
    // contact express server
    const analysisResult = await queryServer(formText);

    // if response is valid, update the UI
    if (!analysisResult || Object.keys(analysisResult).length === 0) {
      alert("Article couldnt be analyzed");
    } else {
      articleText.textContent = analysisResult.text;
      articleTitle.textContent = analysisResult.title;
      articlePolarity.textContent = analysisResult.sentiment;
      articlePolarityPercent.textContent = analysisResult.sentimentPercent;
      articleField.textContent = analysisResult.category;
      articleFieldPercent.textContent = analysisResult.categoryPercent;

      // adds blur to the end of the article text
      articleText.classList.add("cut-text");
    }
  } else {
    alert("Enter a valid Url");
  }
}

// Function to send data to the server
async function queryServer(url) {
  try {
    const response = await axios.post(serverURL, { url });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Export the handleSubmit function
export { handleSubmit };
