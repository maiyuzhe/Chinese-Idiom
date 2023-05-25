# Getting Started with Chinese Idiom Query and Collect

### Database

If you wish to use the Idiom collection feature, you may start the server that saves your selected idioms by running `npm run server`

### `npm install` and `npm start`

`npm install` will install all needed dependencies

`npm start` Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### API Keys

In order to use the translate functionality of this app, you will need to create a free DeepL account and get an API key from there.  The free API key allows the user to translate a total of 500,000 characters in the span of one month.  Should not run into any limits as a result.  The API key goes into an `.env` with the variable name `REACT_APP_API_KEY`