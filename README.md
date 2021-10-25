
# Daily Calorie Deficit - FitLit Project by David Tran, Delilah Necrason, Colgan Meanor
Mod1 2108 FE

## Table of Contents
  - [Install + Setup](#set-up)  
  - [Abstract](#abstract)
  - [Architecture](#architecture)
  - [Technologies](#technologies)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)
  - [Project Specs](#project-specs)

## Install + Setup
    - clone this repo: https://github.com/delilahrois/daily-calorie-deficit
    - On the command line, type: **$ open index.html**

## Project Specs
    - The project spec & rubric can be found [here](#https://frontend.turing.edu/projects/Fitlit-part-one.html)
    - Our deployed page can be found ***Deploy Link will Go Here Soon***



## Abstract
  This project is designed as a Web Dashboard fitness app that keeps track of user data relating to their various fitness activities. Currently, upon page load, the user will be shown data from a randomly chosen user that currently exists in the user database.

  The cards shown on the page will default to showing Today's data (2020/01/20). However, on the left side menu of the page: the user has the ability to choose from Today's data, Last Week's data, and average data from All Time. The data shown on each card can be altered by clicking the buttons on the left side that correspond to the data set you'd like to view.

  The goals of the project were to be able to successfully pull in data from third party APIs, and use class methods to extrapolate and make calculations on the overall data set to show a user specific stats pulled from their overall data, such as average hours slept per day per user, or ounces of water drank each day for the past seven days. In addition, TDD, was implemented as each of these classes and methods were built out along the way, to ensure that our logic in our Javascript functions as expected with minimal bugs or errors.

## Architecture
  Our version of the FitLit project pulls all of its data from a third party API provided by our instructors. On page load, we perform a fetch call for all relevant data sets and instantiate each set of data as its relevant class, to be able to call our calculation methods. For example, the user data from our API is instantiated as a new User Repository class, and each individual user within that data is also instantiated as a new User class.

  The DOM waits for the data to successfully be fetched and brought into the project before attempting to populate cards/widgets on the DOM with the relevant user data.


## Technologies
  - Javascript
  - CSS HTML
  - Atom / VSCode
  - Git Version Control / GitHub
  - Webpack node package
  - day JS node package
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line


## Contributors
  - [Delilah Necrason](https://github.com/delilahrois)
  - [David Tran](https://github.com/isleofyou)
  - [Colgan Meanor](https://github.com/colganmeanor)

## Wins
  - Successfully implemented data into project from Fetch API calls!
  - Successfully used Webpack as a guiding resource on the development of our project
  - Successfully used array iterator methods to calculate values from large data sets
  - Successfully implemented ES6 function syntax, as well as ES6 import/export syntax working across various files.
  - Successfully implemented a package/dependency into our project to aid in working with Dates across our data set (Day JS)


## Challenges + Improvements
  - We were challenged for several hours on the proper implementation of our data that came in from our Fetch calls in fetch.js. We were blocked for a while trying to work out the proper timing in the calling of our functions to determine how soon the DOM populates after attempting to call the data in via the Fetch calls. We had to implement .then() methods to try and make the DOM manipulation wait the data had fully loaded and resolved before running functions that populate the DOM.
  - We were challenged on crafting proper methods for our classes that returned the Data. This took a few hours for us to work out the logic behind the math calculations and how to use our array iterator methods successfully.
  - We were challenged on successfully implementing our chosen Third Party dependency/package. We spent a little less than an hour installing Day JS and getting it up and running. It was a fun challenge though, because we got to practice learning some new rules and figuring them out so we could best implement the package into the logic of our project.  
