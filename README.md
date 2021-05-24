# Game Memory

Candidate: Eduardo Magaldi

- Chosen option: A. Memory game
- Quick description of solution architecture: Vue.js + Typescript Front-end App and server using node.js.
- What is done:
    1. Basic project as requested.
    2. History functionality (using localStorage).
    3. Tests (using Cypress).
- Source code (this repo).
- README with build/run steps (See ```How to run``` below).
- Libraries used with the reason of choice.
    - Vue.js (best frontend framework available nowadays, best features of React and Angular combined in a project with much less complexity and specifics, as Angular and React are).
    - Typescript (helps with types problems, makes code more readable and understandable).
    - Vuex (because it's already delivering basic and bonus stuff).
    - Node-Sass (because I don't remember how to write vanilla css anymore).
    - Normalize.css (because HTML5Boilerplate [and friends] already solves tons of problems before they happen).
    - Node.js (because JavaScript is the only language I know :(, and it's a hell of a 1 file backend, simple stuff).
    - Cypress (because e2e should be the first tests built, if the code is already written).
- What to improve?
    1. Add correct types to the Vuex store, turns out to be a lot of work, so I gave up on it.
    1. Add Typescript to the server code.
    1. Add error treatment for everything.
    1. Make most of the components dumb.
    1. Component Library, a must.
    1. Add Unit tests.
    1. Play a lot with animation, add microinteractions everywhere, make all components animated on load.
    1. A/B testing S2.

## How to run

### (Production) Front-end (from dist folder) + backend

1. Navigate to this folder.
1. With node.js and npm installed run ```npm install```.
1. Run ```npm start```.
1. Go to [http://localhost:8081](http://localhost:8081) to visit the running app.

### (Development) Front-end (from src folder)

1. Navigate to this folder.
1. With node.js and npm installed run ```npm install```.
1. Run ```npm run serve```.
1. Go to [http://localhost:8080](http://localhost:8080) to visit the running app.

### (Development) Back-end
Same as Production. Using nodemon to rerun the process on file change is a suggestion.

## How to run tests
Run `npm run test:e2e`;

<!--
About the frontend:

# Vue.js create app README:

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/). -->
