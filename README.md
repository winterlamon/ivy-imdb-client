# ivy-imdb-client

This is the client-side repo for the IVY IMDb birthday search code challenge.

Welcome to IVY IMDb's most powerful name search. Using the options below you can create a list of people who were born on the selected date. Want a list of people born today? People that share your birthday? You can find them here.

Once you've searched a birthday, you can view its results directly using the API endpoint. <em>Example: http://localhost:3001/ivy-imdb/people/12-02</em>

This app uses:

* Ruby on Rails API
* React.js
* Scraped data from IMDb using Nokogiri and Open-URI

<p align=center><img src="/src/assets/ivy-imdb-start.png" alt="IVY IMDb start view" /></p>

## Installation

To run the software on your local server, clone the repo to your local machine and run `npm install && npm start`.

Note: The API that compliments this repo (https://github.com/winterlamon/ivy-imdb-server), when run locally, should use port 3001. The front-end repo should <strong><em>not</strong></em> be run on port 3001.

## Usage

This repository is the front end that runs with its API repo (https://github.com/winterlamon/ivy-imdb-server).

To search for people by birthday, a user selects a month and day from the dropdown menu. The app includes front-end form validations to prevent a user from submitted a date that does not exist (e.g. February 30). <em>Note: Because IMDb does not have information for people born on February 29, the validations for that month only accept days up to the 28th.</em>

<p align=center><img src="/src/assets/ivy-imdb-validation.png" alt="IVY IMDb search form validations view" /></p>

Upon a successful form submission, the birthday is passed through a function that connects to the API endpoint `http://localhost:3001/ivy-imdb/people/:birthday`. People objects are `find_or_create_by` on search rather than pre-seeded. A loader displays until 50 objects have been created.

<p align=center><img src="/src/assets/ivy-imdb-loader.png" alt="IVY IMDb search loader view" /></p>

During testing, some anomalies occurred where calls to the API would fail because a People object would fail to create because the `mostKnownWork` did not include a rating as it was a work not yet released. The `people#create` method on the API was reconfigured set the rating to `0` in these cases.

The `Reset` button clears the search query for a new search.

<p align=center><img src="/src/assets/ivy-imdb-results.png" alt="IVY IMDb search results view" /></p>

## Contributing

To report bugs, please use the <a href="https://github.com/winterlamon/ivy-imdb-client/issues">issue tracker</a>.
