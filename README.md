# MealifyRecipeScraper

Recipe scraper for Mealify app, created @ CalHacks 9.0!

Full stack webapp scraper uses NLP and Co:here to scrape recipe and ingredient information from any URL. It then stores that information in our CockroachDB database to be served in the [Mealify App](https://github.com/abhiganesh/mealify).

## Client

Frontend React app built to query the backend model and DB. Prompts user to input a recipe URL, then queries the model to scrape the webapp. Displays recipe information to user, allowing the user to add the recipe to the CockroachDB, which again queries the backend to add the recipe information to the DB. 

## Server

Backend Flask app used as an interface for the frontend to interact with the Co:here model and CockroachDB.

## See Also
* [Mealify App](https://github.com/abhiganesh/mealify)
* [Mealify Open-Source API](https://github.com/Aldenysq/recipe_heroku)
* [Mealify DevPost](https://devpost.com/software/name-ntd9ux)
