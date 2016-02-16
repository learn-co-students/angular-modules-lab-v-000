# Including Submodules

## Objectives

- Define a new Angular app module
- Invoke Angular with angular.bootstrap
- Invoke Angular with ng-app
- Import the ngRoute submodule

## Instructions

Fork and clone this directory to get started.

In this lab you'll create a module in Angular named `app`. Do this in our `app.js` file.

You'll then need to create our `MainController` controller. Do this in `MainController.js`, and attach it to our module named `app`.

Check `index.html` and notice how you'll see `Hello, {{ name }}!`. This means our module isn't rendering - using the `ng-app` attribute, bootstrap it to the HTML element with the class `app`. Refresh the page - oh wait, we don't see anything! We need to attach a value to the `name` property on our `$scope` (make sure you set `$scope` as the first argument in the controller!).

Our module has a sub-module dependency for `ngRoute` (defined in the `angular-route.js` file in this repo. Add this dependency to the module. We won't see anything different, but if done correctly we won't get any errors! We will actually use the module later on.
