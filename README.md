# Directors Angle

An app where you can learn about film directors and their lives.

It also showcases different approaches in code we can have towards achieving the app’s use cases. Each approach has it’s own branch.

Use cases:

- displaying data from a server
- filtering data to user requirements
- sending data between UI elements

![project_banner](/docs/banner.png)

The project covers most used State Management and Data Fetching tools in React Native projects as stated by the most recent [React Native Survey 2023](https://results.stateofreactnative.com/)

## Branches

Branches are named by **stateManagement-dataFetching** used in the app instance.

So for example `context-swr` uses React Context for global state management - storing filtered Directors in this case, and SWR for fetching directors and data fetching related work - refetching, managing loading and error states. Diferrent data fetching approaches were paired with React context as it's an already built-in React tool.

Currently there are

- context-fetch
- context-swr
- context-tanStackQuery
- jotai-fetch
- mobx-fetch
- mobxStateTree-fetch
- recoil-fetch
- redux-fetch
- reduxToolKit-axios
- reduxToolKit-fetch
- reduxToolKit-RTKQuery

Ideas for the future are also branches that will cover diferrent folder structures and approaches in shaping global data. Here global data and actions on it were split by the screen they appear on.

Adding a branch for `XState` as a state management tool as well, as adding data fetching branches covering `Apollo`, `Relay` that would need a `GraphQL` server and `tRPC` that would have a `tRPC` server setup.

This is the `main` branch and contains this info about the project and branches on it. In it's source the same content as on `context-fetch` branch can be found, since it's the most lightweight approach in terms of not using 3rd party state management or data fetching tools.

## Installation

The React Native classic

```
npm install
cd ios && pod install
```

## context-fetch

**State management:** context

**Data fetching:** fetch

### State management

Data is fetched using a `fetch` client and stored in a component's `state` property. Data that needs to be accessed across multiple screens is passed via route parameters, component `props` or `context`.

Directors data is stored in a `context`, as it can be filtered on the `DirectorsFilter` screen.

Contexts are split by a screen so `DirectorsContext` concerns data rendered on the main directors - `DirectorsAngle` screen and `DirectorsFilterContext` is concerned with data rendered on `DirectorsFilter` screen.

### Folder structure is a hybrid

There's a `screens` folder that contains all the screens. Components that are not used in multiple
screens are placed inside the `components` folder of the screen where there are used. The pro here
is that the components are encapsulated inside the `screen` folder where they are actually presented so they don't clog up space in other folders. The con is that it gets vertical having a `components` folder inside `screens`.
File names in view folders are generic (index, styles, hooks etc)

#### Folders are:

**components**

- contains the shared components used in multiple places in the app
- `index.tsx` contain the view related code
- `styles.ts` the styles

**constants**

- exporting assets, strings, urls, static data

**context**

- files that contain context relating to a specific domain or screen - `Directors`, `FilterDirectors`

**libs**

- contains reusable libraries and utilities such as custom hooks, API clients

**navigation**

- all navigators used in the project

**screens**

- `index.tsx` contain the view related code
- `hooks.ts`contain the hooks the view calls to get data or change it
- `styles.ts` contains the styles
- `utils` files

**styles**

- colors, typography, dimensions

**types**

- Type definitions for TypeScript

**utils**

- General utility functions used throughout the project.
