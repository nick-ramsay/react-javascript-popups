# react-javascript-popups

This application is used to demo how JavaScript popups (https://www.w3schools.com/js/js_popup.asp) cannot be recorded in Datadog RUM and cannot be accessed by Datadog synthetics tests.

To test this on your own, copy this repository to your local machine and then do the following:

1. Run ```npm install``` command to install all Node packages
2. Create a RUM application in Datadog using the JavaScript NPM instrumentation
3. Create a ```.env``` file in the ```client``` directory on the repo. Add your RUM application's ```site```, ```applicationId```, and ```clientToken``` to the ```.env``` file as environment variables. Please reference the ```.env-example``` file for an example of this configuration and make sure you use the same environment variable names.
4. Start the application locally by running ```npm run client``` in your local repository
5. If you'd like, you can also deploy a version of this application on Heroku. You'll need to add the ```.env``` environment variables as `Config Vars` in the Heroku app which can be found under your Heroku application's `Settings` page.