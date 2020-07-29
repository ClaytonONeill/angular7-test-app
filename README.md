# Angular7 Test Application

This is a quick build to get some reps working with Angular7, testing routes and basic functionality. Nothing too crazy.

I'll outline below to the best of my ability how to get Angular7 up and running, documenting any additional installs or packages that I use along the way.

## Step 1: Install the Angular CLI

(Requirements: IDE such as VS Code, Atom, Sublime; NodeJS)

If you don't have NodeJS installed yet you can follow this link here to guide you through that. https://www.javatpoint.com/install-nodejs

Alright, so once you have these requirements met, go ahead and run the command:

```
npm i -g angular/cli
```
This should take a minute or so and then return a confirmation message letting you know the installation was a success.

## Step 2: Creating a new project

Once you have the Angular CLI working, go ahead and navigate to or create the directory in which you want to begin working.

Run the command:

```
ng new *insert your app name here*
```

Example: ng new cool-new-angular-app.

This will being the app creation proccess where you will be given a couple prompts to answer such as:

```
? Would you like to add Angular routing? (y/N)
```

*This is something you want to confirm if you intend to have multiple pages/components to navigate to in your application.*

It will also ask you about which stylesheet format you wish to use such as basic CSS or SASS, LESS or Stylus.

Once you make your selections the app will begin to build. It takes about another minute and will also return a success message.

*A Git repository will be initialized in the application folder*

Run `ng serve -o` for a dev server (-o is a flag that will open your default browser). Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Step 3: Generating components

So the command to generate a new component is `ng generate component (name-of-component-here)` which can be abbreviated to `ng g c (name-of-component-here)`.

Example: ng g c nav.

When you generate a component, it will add a new folder inside your src folder, a level beneath your app folder. This will provide you with the basic file structure consisting of your css, html, a spec.ts, and your main .ts file.

*This will also update your `app.module.ts` file, in which it adds your new component under the NgModule decorator, under declarations.*

For this project I created 4 components:

nav, about, contact, and home.


#This is Angulars README content:

# TestAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Development server

Run `ng serve -o` for a dev server (-o is a flag that will open your default browser). Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
