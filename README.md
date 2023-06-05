# Área do Vendedor

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;
![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp;
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)&nbsp;


This is a ReactTS-based web application boilerplate.

### Architecture

The entire project is standardized and basically divided into, but not restricted, in the bellow main folders:
- `src`: the core of the application. Stores the main files and multiple subfolders.
    - `assets`: store static files, including images and vectors.
    - `components`: atomified (by responsability, not code sizing) folder with the entire application components
        - `atoms`
        - `molecules`
        - `organisms`
    - `contexts`: all contexts, including its related parsers, types and others, are stored by folders. Each folder, represents an context. The general files are stored in root but should be avoided.
    - `hooks`: hooks are abstractions of over each context, with main function of export context desired resources. Each hook is represented by a file.
    - `pages`: literally store the application pages. The indexes files of this folder should be directly called into router.
    - `routers`: responsible for store the main router file and its helpers.
    - `services`: external resources should stored here, including error or event tracking ones.
    - `utils`: general utility resources used by the entire app.

### Tips to Begin

- There are an test flow of atomic designed components: organism, molecule and atom. 
- There is an context and hook named as "Test" that shows how the contexts should be used. Every request, major parsers and types should be inside of the context. The hook is only an abstraction to use the context resources in an better performing way.
- To create and new context and use its hook in an page, remember to add this page's route, declared in the `main-router.tsx` file as children of context provider (created in the context file). 

### Running Local

1. Install the dependencies: `yarn`;
2. Create environtment variables file (`.env`) using the `.env.template` file as template.
3. Execute `yarn dev`

The project will be available at `http://localhost:3000`


## Others

- To identify unused or unresolved imports, just run `yarn scan-dead-code`.


