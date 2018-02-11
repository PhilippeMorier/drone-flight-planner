# Drone Flight Planner
This app allows creating multiple flight plans by choosing points on a map.

An online version can be found on [this GitHub page](https://philippemorier.github.io/drone-flight-planner/).

## Useful commands
- Run `npm install` to install the dependencies.
- Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.
- Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Used technologies
- Angular
- [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8
with `ng new drone-flight-planner --prefix dfp --routing true --style scss --skip-commit true --skip-install true`
- [Material Design Lite](http://mseemann.io/angular2-mdl/)

## Potential improvements
- Considering `ngrx` for state management

## Potential features
- [Fullstory](https://www.fullstory.com/) for session replay
- [Sentry](https://sentry.io/) for error tracking
- Visual regression tests
- [Internationalization (i18n)](https://angular.io/guide/i18n)
- Accessibility
- Allow deleting flight plans
- Support editing/moving single points in flight plan
- Support naming of flight plans
- Dynamic centre of map

## Tested browsers
- Chromium 64.0.3282.119 on Bodhi Linux 4.4.0
- Firefox 58.0.1 (64-bit) on Bodhi Linux 4.4.0
