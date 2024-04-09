# Powered Web Application template

This repository is meant to be used as a starting point for a PWA application

## Usage

Please refer to the main documention on how to start the repository

If you are using yarn, you may run the following command
```sh
yarn create @missnalgas/project
```

### Directories

- **app**: This directory is used by [NextJS](https://nextjs.org/) to map the routes of the application
- **domain**: In this directory we store business logic and model declarations
- **application**: Here we store the implementations and the application related logic based on the declarations used in the *Domain*. This way we manage separation of concerns
- **infrastructure**: This is where we store all the React components and functions used to render the application contents


### Dependencies

#### Axios
Library used to handle all endpoint requests

#### Zustand

Library used to manage the global state of the application. Please refer to the official documentation for more information. [Github](https://github.com/pmndrs/zustand)

### Style

We use *eslint* and *prettier* to format the codebase, you may use the following command to fix all formatting issues in your code
```sh
yarn lint --fix
```

