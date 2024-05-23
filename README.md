# Directors Angle

An app where you can learn about film directors and their lives.

It also showcases different approaches in code we can have towards achieving the app’s use cases. Each approach has it’s own branch.

Use cases:

- displaying data from a server
- filtering data to user requirements
- sending data between UI elements

The project covers most used State Management and Data Fetching tools in React Native projects as stated by the most recent [React Native Survey 2023](https://results.stateofreactnative.com/)

## jotai-fetch

**State management:** jotai

**Data fetching:** fetch

### State management

Data is fetched using a `fetch` client and stored in a component's `state` property. Data that needs to be accessed across multiple screens is passed via route parameters, component props, or Jotai atoms.

Directors data is stored in a Jotai atom, allowing it to be accessed and filtered on the `DirectorsFilter` screen.

Atoms are organized based on the screen where the data is used. For example, the `DirectorsAtom` holds the data displayed on the `DirectorsAngle` screen, while the `DirectorsFitlerAtom` holds the filtered data used on the `DirectorsFilter` screen.

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

**libs**

- contains reusable libraries and utilities such as custom hooks, API clients

**navigation**

- all navigators used in the project

**screens**

- `index.tsx` contain the view related code
- `hooks.ts`contain the hooks the view calls to get data or change it
- `styles.ts` contains the styles
- `utils` files

**store**

- contains atoms, `DirectorsAtom` containing data for Directors screen and `DirectorsFitlerAtom` data
  relating to DirectorsFilter screen

**styles**

- colors, typography, dimensions

**types**

- type definitions for TypeScript

**utils**

- general utility functions used throughout the project
