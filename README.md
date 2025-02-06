# Article Polarity Analyzer using NLP Project

A client that takes the url of an online article, and returns a its title, a snippit of text from it, its polarity and which field it targets.

The client sends the url to an express server which validates the url and query's diffbot.com api for it to analyze the article from the URL.

The diffbot.com api returns analysis results like:

1. Article Title
2. Article Text
3. Article Polarity
4. Article Subject
5. Article Score

### Polarity

polarity is returned as a value between -1 and 1, so then it was cetegorized into 3 rankings:

- Positive ==> 0.6 <
- Neutral ==> -0.6 <= and <= 0.6
- Negative ==> -0.6 >

This label is then returned to the client with the polarity transformed into a percentage value out of 100, representing how confident the lable is.

## How to run

1. add a `.env` file at the root of the project directory.

2. place your diffbot api key with the following format:
   `DIFFBOT_API_KEY="your_api_key"`

3. install the dependancies using `npm install`

4. run the express server using `npm start`

5. run the app in development mode using: `npm build-dev` or production mode using: `npm build-prod`
