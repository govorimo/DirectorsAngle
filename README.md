# Directors Angle

An app where you can learn about film directors and their lives.

It also showcases different approaches in code we can have towards achieving the app’s use cases. Each approach has it’s own branch.

Use cases:

- displaying data from a server
- filtering data to user requirements
- sending data between UI elements

The project covers most used State Management and Data Fetching tools in React Native projects as stated by the most recent [React Native Survey 2023](https://results.stateofreactnative.com/)

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
