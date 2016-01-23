# Including Submodules

## Objectives

- Define a new Angular app module
- Invoke Angular with angular.bootstrap
- Invoke Angular with ng-app
- Import the ngRoute submodule

## Instructions

Setup your directory structure as follows:

- js/
  - app/
    - controllers/
      - MainController.js
    - app.js
  - angular.js
  - angular-route.js
- index.html

You can find `index.html`, `angular.js`, `angular-route.js` in this repo.

In this lab you'll create a module in Angular named `app`. Do this in our `app.js` file.

You'll then need to create our `MainController` controller. Do this in `MainController.js`, and attach it to our module named `app`.

Check `index.html` and notice how you'll see `Hello, {{ name }}!`. This means our module isn't rendering - using the `ng-app` attribute, bootstrap it to the HTML element with the class `app`.

Once that works, remove the `ng-app` attribute and instead, inside `app.js`, use `angular.bootstrap` to render it into our HTML element with the class `app`.

Our module has a sub-module dependency for `ngRoute` (defined in the `angular-route.js` file in this repo. Add this dependency to the module. 
