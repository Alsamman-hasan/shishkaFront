## Run project

In the project directory, you can run:

### `pnpm run dev` 

for running api :
## `docker compose up --build -d`
for stopping docker api :
## `docker compose down`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.
 
## or `pnpm run dev:vite`

----

## Project architecture

The project was written in accordance with the Feature sliced design methodology

Documentation link - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----
## Project configuration

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

All configuration is stored in /config
- /config/babel-babel
- /config/build - webpack configuration
- /config/jest - test environment configuration

The `scripts` folder contains various scripts for refactoring\simplification of writing code\report generation, etc.

----
## #'pnpm run generate:slice slice name_of_slice'

## runs for generate slices (enities, feature, pages)

### `pnpm run build:prod`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


### `pnpm run build:dev`

## Builds the app for development mode to the `build` folder.\


### `pnpm run lint:ts`
run linter for ts 


### `pnpm run lint:fix` 
## runs to fix errors for ts 

### `pnpm run lint:scss` 
run linter for style-lint if have 


### `pnpm run lint:scss:fix` 
## run to fix style errors for style-lint if have 


### `pnpm unit`
Launches the test runner in the interactive watch mode.\
