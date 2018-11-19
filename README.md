# SkyDocs

![Screenshot](./src/assets/img/screenshot.png)

## Epicodus Group Week - Angular - November, 2018

### By **Brian Nelson, Chris Crow, Mel Yasuda, Skye Nguyen**

## Description

SkyDocs is a rich text editor where users can create and manage their documents.

## Specifications

* The application allows the user to sign up with their email and password.
* The application allows the user to log in with the email and password.
* The application allows the user to create a document on the Dashboard page.
* The application allows the user to click the document and edit on the Editor page with Quil Rich Text Editor.
* The application allows the user to save the document and styling as a JSON object to Firebase.
* The application allows the user to delete the document.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known bugs

* The application does not save the changes to the correct document stored on Firebase.
* The application does not correctly retreive Quil documents from Firebase.

## API Key for Firebase:

Create a file in src/app/api-keys.ts

Insert Code:

> export const masterFirebaseConfig = {
   > apiKey: "xxx",
   > authDomain: "angulargroupweek.firebaseapp.com",
   > databaseURL: "xxx",
   > projectId: "xxx"};

Replace xxx with firebase apikey data

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Contact & Support

* Skye Nguyen - @sn31 - skye@dames.es
* Brian Nelson - @nelsonbrian
* Chris Crow - @ChrisMCrow
* Mel Yasuda - @MelYasuda

## Technologies used

* TypeScript
* Bootstrap
* Angular CLI version 1.6.5.
* [Quil Rich Text Editor](https://quilljs.com/)
* Firebase
