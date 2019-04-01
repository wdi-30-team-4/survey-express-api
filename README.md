# Survey Express Client
Survey Express lets you create, update, view and delete a survey. User can
sign-up/sign-in. On sign-in user can create a survey, view the surveys that
were created previously, update and delete the surveys. User can respond to any
survey not taken in the past.

## Technologies
  HTML, CSS, Bootstrap, JavaScipt, jQuery, Ajax, MongoDB, Mongoose

## Project Links
1. [Client Deployed Site](https://wdi-30-team-4.github.io/survey-express-client/)

2. [Client Repository](https://github.com/wdi-30-team-4/survey-express-client)

3. [API Deployed Site](https://polar-woodland-60280.herokuapp.com/)

4. [API Repository](https://github.com/wdi-30-team-4/survey-express-api)

## ERD
![ERD Diagram](https://res.cloudinary.com/lucasl/image/upload/v1553714996/Screen_Shot_2019-03-27_at_3.25.58_PM.png)

## Planning and Execution
  We started with designing wireframes and ERD.
  Meet in the morning and do a standup everyday. Prioritize and assign tasks.
  Two people worked on front-end and two on back-end.
  Took turns and swtiched groups to make sure all 4 work on both front and back end.
  Write User Stories for the MVP.
  Test with curl-scripts for each user story.
  Build front-end and test crud operations.
  Add styling to the front-end.
  Deploy to GitHub and Heroku.

## Routes

User:
 * POST /sign-up     users#signup
 * POST /sign-in     users#signin
 * DELETE /sign-out  users#signout
 * PATCH /change-password  users#changepw

Survey:
 * GET    /surveys     surveys#index
 * POST /surveys  surveys#create
 * GET    /surveys/:id     surveys#show
 * PATCH    /surveys/:id     surveys#update
 * DELETE /surveys/:id  surveys#destroy

Response:
 * GET /response response#index
 * POST /response response#create

## Reach Goal
  Let user create a survey with more than two options.
  Make a real-time dashboard.
