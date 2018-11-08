#### By _**Brian Nelson, Chris Crow, Mel Yasuda, Skye Nguyen**_

# SkyDocs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Description

SkyDocs is a rich tech editor where users can create and manage their documents.

## Specifications

* The application allows the user to sign up with their email and password.
* The application allows the user to log in with the email and password.
* The application allows the user to create a document on the Dashboard page.
* The application allows the user to click the document and edit on the Editor page with Quil Rich Text Editor.
* The application allows the user to save the document title.
* The application allows the user to delete the document.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known bugs

* The application won't save Quil documents into Firebase.
* The application won't retreive Quil documents from Firebase.
* The application won't edit the title of the document.

## API Key for Firebase:

Create a file in src/app/api-keys.ts

Insert Code:

export const masterFirebaseConfig = {
    apiKey: "xxx",
    authDomain: "angulargroupweek.firebaseapp.com",
    databaseURL: "xxx",
    projectId: "xxx",
  };

Replace xxx with firebase apikey data

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Technologies used

* html
* CSS
* Angular 5
* Quil Rich Text Editor (https://quilljs.com/)
* Firebase

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

