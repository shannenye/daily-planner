# DailyPlanner

[Link to Deployed Project](https://shannen-daily-planner.herokuapp.com/)

<img src="https://github.com/shannenye/daily-planner/blob/main/src/assets/gifs/demo-mini.gif" width="600" height="auto" />

-   This project uses lazy loading for modules. By default NgModules are eager loaded which can cause large bundle sizes and load times. As this is a small project eager loading would normally be fine. However in the long run and in the real world there can be hundreds of rows which would negatively effect this app. Documentation for lazy loading can be found on the [Angular Docs](https://angular.io/guide/lazy-loading-ngmodules)

-   Newest [Ngrx Documentation](https://ngrx.io/guide/store/reducers) shows an example of a reducer using `on` instead of switch cases. Interesting! Always improving and always changing, let's do it for this project too! I've only used switch cases in my current employment's projects so this is a fun change :)

-   DevTools are added for better visibility if you want to see actions firing and state

-   This project uses normalize scss for browser compatibility. Documentation can be found [here](https://github.com/JohnAlbin/normalize-scss)

-   Project requirements for searching and sorting are supposed to be done locally, therefore you can find the implementation as selectors in the `dashboard.selectors.ts` file

### Features

-   User can sort by assignee by clicking the `Assignee` table header. First click will sort the rows by A -> Z using lastname firstname. Second click will flip the triangle facing down and will sort by Z -> A

-   User can sort by due date by clicking the `Due Date` table header. First click will sort by closest due date -> furthest due date. Second click will flip the triangle facing down and will sort by furthest date -> closest date

-   User can sort by stage by clicking the `Stage` table header. First click will sort alphabetically A -> Z. Second click will flip te triangle facing down and will sort by Z -> A.

-   User can sort by priority by clicking the `Priority` table header. First click will sort by highest priority -> lowest priority. Second click will flip the triangle facing down and will sort by lowest priority -> highest priority.

-   An extra feature is the ability to select/unselect ticket priority by clcking on the ticket's flag svg :)

-   User can drag and drop rows. Rows are contrained to its container

-   Search currently looks for ticket titles. User can search for part of a word or the whole word. For example `final` and `finalize` should both return two results for the ticket titles with the word `finalize`. User may also sort the table columns after the search as well and toggle priority too! For best practices, existing sorts are cleared when a search is entered. To clear the search and get back the default state of tickets, delete the search and press enter just like normal site searches. Try it out!

-   The main branch is hooked up with Travis CI and deployed automatically to heroku. Branching off of `main` and creating a Pull Request will also run a travis build to check if the branch is error-free. Unfortunately I was not able to configure travis to pass the build but it is still integrated with the repo. I have not previously done a continuous deployment with a CI server so I thought I would give it a try. I believe the issue is in the `.travis.yml` file and the instructions on there.

### Extras

-   [] Use an API that supports paging and implement pagination on the table

-   [x] Style up the table with SCSS to make it look pretty

-   [x] Setup continuous deployment of the app with a CI server

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
