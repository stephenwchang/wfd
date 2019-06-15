# wfd
what's for dinner?

Description
Our application helps indecisive people decide what to have for dinner, by choosing their dinner for them based on the answers that they input into our scientifically comprehensive survey. 
Motivation
We had the idea because one of our team members brought up an argument he was having with his wife during class about where they were going to go for their upcoming date night. We all saw him begin breakdown and cry during our initial brainstorming. His relationship had what is commonly known as Indecisive Dinner Planning Syndrome, or IDPS for short. Feeling for our comrade, we realized that we’ve all experienced IDPS at some point of our lives and the painful memories flooded back for all of us. Emotionally distraught, we made a pledge to stop IDPS and all the pain it leads too. That is how “What’s For Dinner” was birthed.
Result
Using Survey logic; the Yelp API; and the Spoonacular API, we were able to find a cure to IDPS. Using our revolutionary survey, our app intuitively gauges the mood/vibe of any individual or group of people. Based on their answers, “What’s For Dinner” will not only decide their meal, but whether they should go out to dinner or stay in and cook something. Truly remarkable tech.
Team Efforts
All team members contributed conceptually to the project. All team members helped in some way or another in deciding the best approach to accomplish our goal.
Individual Responsibilities
Andrew helped build the database which contain the questions and answers as well as writing the questions and answers themselves. He also helped with the logic behind the app: the part that is responsible for looping over the user responses and comparing them to the foodkey (and storing each unique answer in a specific food array)
Stephen helped with the APIs, routing, and front-end javascript
Kevin helped build the database and problem solve issues that arose with SQL and Sequelize. 
Joe helped brain stormed a lot of the ideas and designed the front-end of the project using javascript and handlebars.

Challenges
There were several challenges that stood between us and a cure for IDPS, the first being how to create a survey that might actually return a food the user was craving. So how to ask good questions, how to use the answers to the questions to match up the user to a food. We tried an approach similar to FriendFinder at first, this was a failure. 
Improvements/ICEBOX
User Accounts
Dinner history
Allow our app to always give fresh options
Suggestion ratings
Allow our app to gauge whether or not it should repeat choices to individual users
Notice people that have similar dinner history and attempt to match them into Meet-ups
Dinner-tinder 
Additional survey questions and results
We could expand the number of foods we have, while also adjusting the answers (or creating more questions/answers) to help narrow down what the user is feeling the most. 






[![Build Status](https://travis-ci.org/stephenwchang/wfd.svg?branch=master)](https://travis-ci.org/stephenwchang/wfd)
