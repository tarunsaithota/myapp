# MyApp

MyApp is a web application similar to Swiggy that allows users to view restaurants in a specific area, explore their menus, and add items to a cart. The project is built using JavaScript, React, and CSS, without any CSS frameworks like Tailwind, Bootstrap, or MUI.
You can see the live version of the app here - https://thota-s-kitchen.web.app/.

## Table of Contents
- [Features](#features)
- [Concepts Covered](#concepts-covered)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Screenshots](#screenshots)

## Features
- View restaurants in a specific area via API calls.
- View restaurant menus with details such as description, rate, and ratings.
- Add menu items to the cart.
- Header component with navigation to About Us, Contact Us, and Cart pages.

## Concepts Covered
- Redux for state management.
- Functional and class-based components.
- Browser Router configuration.
- State management with the help of hooks.
- Custom hooks.
- Babel and Webpack for module bundling and code transpilation.
- Common CSS for styling.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/tarunsaithota/myapp.git
    cd myapp
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage
To start the development server:
```sh
npm start
```
This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment
To build the app for production:
```sh
npm run build
```
This will create an optimized production build in the `build` folder.

To deploy the app, you can use Firebase Hosting, Netlify, Vercel, or any static site hosting service. For Firebase Hosting, follow these steps:

1. Install Firebase CLI if you haven't already:
    ```sh
    npm install -g firebase-tools
    ```

2. Initialize Firebase in your project:
    ```sh
    firebase init
    ```

3. Deploy to Firebase:
    ```sh
    firebase deploy
    ```

## Screenshots


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
