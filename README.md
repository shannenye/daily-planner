# DailyPlanner

-   This project uses lazy loading for modules. By default NgModules are eager loaded which can cause large bundle sizes and load times. As this is a small project eager loading would normally be fine. However in the long run and in the real world there can be hundreds of rows which would negatively effect this app. Documentation for lazy loading can be found on the [Angular Docs](https://angular.io/guide/lazy-loading-ngmodules)

-   Newest [Ngrx Documentation](https://ngrx.io/guide/store/reducers) shows an example of a reducer using `on` instead of switch cases. Interesting! Always improving and always changing, let's do it for this project too! I've only used switch cases in my current employment's projects so this is a fun change :)

-   DevTools are added for better visibility if you want to see actions firing and state

-   This project uses normalize scss for browser compatibility. Documentation can be found [here](https://github.com/JohnAlbin/normalize-scss)

-   Project requirements for searching and sorting are supposed to be done locally, therefore you can find the implementation as selectors in the `dashboard.selectors.ts` file

### Extras

-   [] Use an API that supports paging and implement pagination on the table

-   [x] Style up the table with SCSS to make it look pretty

-   [] Setup continuous deployment of the app with a CI server

-   [] Manually resize the columns with the mouse

### Running/Testing Locally

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
