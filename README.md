# React Boilerplate - 2UP

This is a React boilerplate generated with create-react-app. The current boilerplate includes several libraries already installed based on the current necessities and/or standards of today's React Frontend development.

This boilerplate should not be considered as the last "boilerplate" solution for all projects. However this will encourage you to follow the best practices when developing React/React Native Apps.

In the following parts we will describe in deep all the dependencies installed and the purpose of each.

## Getting Started

The follow list will describe all the libraries shipped in this boilerplate (sorted by functionality):

#### UI/Designing
[Storybook](https://storybook.js.org/)

Description: An UI development environment. Helping Frontend developers to archive a better workflow at the time of developing components dividing UI from logic. 

### Styling & Tooling
[Styled Components](https://www.styled-components.com/)

Description: This library is an abstraction of CSS-in-JS styling. It not only has a fantastic API but also it encourage best practices when developing components.

[React-motion](https://github.com/chenglou/react-motion)

Description: A simple library that solves animation problems.

[Polished](https://polished.js.org/)

Description: A simple toolkit that helps to abstract styles.

### Navigation
[React-Router](https://github.com/ReactTraining/react-router)

Description: The standard of Routing for React.

[Connected-react-router](https://github.com/supasate/connected-react-router)

Description: Synchronize router state with redux store.


### Tooling
[Recompose](https://github.com/acdlite/recompose)

Description: A fantastic and simply utility belt for creating and composing High Order Components.

[@hocs](https://github.com/deepsweet/hocs#readme)

Description: A collection of very useful High Order Components that easily couples with recompose.

[Ramda](https://ramdajs.com/)

Description: A practical functional library that makes easy to create functional pipelines and never mutates data.

### Type checking & Tooling

[Flow](https://github.com/facebook/flow/)

Description: A simple static typecheker for JavaScript.

[Flow-typed](https://github.com/flow-typed/flow-typed)

Description: Library interface definitions.

### State management & Tooling

[Redux](https://redux.js.org/)

Description: Central state control for React.

[Redux-actions](https://github.com/redux-utilities/redux-actions)

Description: Flux standard action utilities for Redux.

[Reselect](https://github.com/reduxjs/reselect)

Description: A selector library that helps you to compute derived data.

[Redux-saga](https://redux-saga.js.org/)

Description: A fantastic library that helps you to handle side effects (e.g. asynchronous like data as fetching)

### Testing & Tooling

[Jest](https://jestjs.io/docs/en/getting-started.html)

Description: A default library for testing React Apps.

[Enzyme](https://github.com/airbnb/enzyme)

Description: Testing utilities for React Apps.

### HTTP Client

[Axios](https://github.com/axios/axios)

Description: A promise based http client. Great for abstracting http requests.

### Setup & Tooling

[React-app-rewired](https://github.com/timarney/react-app-rewired)

Description: Tweak the create-react-app webpack config without ejecting (mostly used for adding plugins).

  This App uses several plugins that enables to have more flexibility using several libraries installed:

    - react-app-rewire-styled-components
    - react-app-rewire-hot-loader
    - react-app-rewire-polished
    - react-app-rewire-preload-plugin
    - react-app-rewire-svg-react-loader

### Linters

This boilerplate includes several linters:

[Eslint](https://eslint.org/)

 This app uses the following plugins/presets for eslint:
  ##### Presets:
  - airbnb
  - prettier/react
  - prettier/flowtype
  - prettier/react
  - prettier
  ##### Plugins:
  - jest
  - flowtype
  - react
  - jsx-a11y
  - import
  - prettier"

  [Stylelint](https://github.com/stylelint/stylelint)

  To make things work with styled-components we need the following plugins:

  - stylelint-config-recommended
  - stylelint-config-styled-components
  - stylelint-processor-styled-components

  ### Do not forget to add this to your vscode workspace settings:

  ```
    {
      "flow.useNPMPackagedFlow": true,
      "flow.runOnAllFiles": true,
      "javascript.validate.enable": false,
      "editor.formatOnSave": false,
      "javascript.format.enable": false,
      "prettier.eslintIntegration": true,
      "eslint.autoFixOnSave": true
    }
  ```
  This will enable Flow to work properly and save time when formatting your code with eslint/prettier

### Prerequisites

To start this boilerplate running enter first install all deps:
```
yarn install
```
OR
```
npm install
```
Then to run the project:
```
yarn start
```
OR
```
npm start
```
## Running Storybook

To run your stories:

```
yarn run storybook
```
OR
```
npm run storybook
```

## Running the tests

Test in React applications are as important as any built software. To start the tests

```
yarn test
```
OR
```
npm test
```

### File structure

There is no special rule for organizing your App's file structure, however It is recommended to follow a "Feature pattern" or a "Fractal pattern".

[More info: Fractal Pattern](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af)

[More info: Feature Pattern](https://medium.freecodecamp.org/feature-u-cf3277b11318)

### Coding Style

Following best practices, It is highly recommended to write your code in a Functional Programing style. Your code will be more readable, modular and easy to support and debug.

[More info: Functional Programming](https://medium.com/@agm1984/an-overview-of-functional-programming-in-javascript-and-react-part-one-10d75b509e9e)

Another thing to consider is the data management in your App. Immutability is the rule number one when handling your data.

[More info: Immutability](http://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/)

## Deploying

There are many strategies when when deploying our React App to the server. An interesting aproch when building single React apps would be to use Shipit.

[Shipit](https://github.com/shipitjs/shipit)

## Notes

It is essential to remember that this boiler plate is just a guide to follow and should not be considered as the last source of truth when building React Apps. Using create-react-app or building the app from the ground will depend only and only on the project and type of business.


