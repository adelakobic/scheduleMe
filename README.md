# scheduleMe

## Description 📜
Module 5 requires students to build a scheduler featuring dynamically updated HTML and CSS powered by jQuery.

## Motivation 💪🏻
This project is to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## Build status 🏗
* The starter code has been built by Birmigham University. The assignment requires me to add updated HTML and CSS powered by jQuery. 

## Code style 🔐
* Standard HTML and CSS has been used for this project. 
* The language for the website is written in US English. (USA English)

## Acceptance Criteria ✅
GIVEN I am using a daily planner to create a schedule
* WHEN I open the planner
    THEN the current day is displayed at the top of the calendar
* WHEN I scroll down
    THEN I am presented with timeblocks for standard business hours
* WHEN I view the timeblocks for that day
    THEN each timeblock is color coded to indicate whether it is in the past, present, or future
* WHEN I click into a timeblock
    THEN I can enter an event
* WHEN I click the save button for that timeblock
    THEN the text for that event is saved in local storage
* WHEN I refresh the page
    THEN the saved events persist.

## Assets 📷
The following animation demonstrates the application functionality. 
![User clicks on the slots of the color-coded calendar and edits the events](./Assets/images/05-third-party-apis-homework-demo.gif)

## Problems encountered 🤯
* geting the past events to turn grey, and getting the present events to turn red 31/7/22 
* making sure the event saves to console log 31/7/22 something not working in JS code
* Time display not working 2/8/22 - showing an hour GMT time but an hour behind the browser/local time in UK
* schedule colours - past is not turning grey and future is not turning green 2/7/22
* schedule colours - removed the 'dot' in the classes for time and it changed the colours to their correct time allocation.

## Changes made to the code 𝌡
* updated links to Bootstrap, jQuery, jQuery UI and Moments.js to most current version available
* add the time blocks to the scheduler using Bootstrap: grids 
* added hover color to the save button
* To be made: Past events: grey, Current events: red, Future events: green - at present all events are green 31/7/22 
* added time to be displayed at the top of the page
* changed the class names from "hour10" to "hour-10" and the timing blocks now work and colour the correct way 

## Link to the deployed website 💻
URL: https://adelakobic.github.io/scheduleMe/

## Credits 💃🏻
* Starter code (HTML and CSS) provided by the University of Birmingham.
* Bootstrap for CSS
* Moment JS website [Moment.js](https://momentjs.com/) for the time JS elements
* Font Awsome for icons
* referenced: StackOverflow : https://stackoverflow.com/questions/13313348/jquery-update-time 
* referenced: https://htmlcheatsheet.com/jquery/ 

## Licence 🪪
* MIT License is included in this project. 
* Bootstrap carries MIT licence
* Moment.js carries MIT licence
* jQuery carries MIT licence