# NestJS-Mongo-API

### Simple API for notes. This API was created with Typescript, NestJS, Mongoose, MongoDB and Docker.

I used Node/Typescript for the back-end.

> Created by Luca Becci

## 1. Started ⌨️

for get the project you will use:

```tsx
git clone "https://github.com/lucabecci/NestJS-MongoDB-API"

```

## 2. Pre-requeriments 🛠

You will need this requeriments for good rendiment:

- Node.JS > 10.X
- npm > 6.X
- Docker(if you will run this project with Docker)

## 3. Installation 🔩

You will need run this comands for the installation:

```
With npm: 
npm install //install the backend dependencies.

With yarn:
yarn install //install the backend dependencies.

```

## 4. Use the project

### About the app

the API use Node/Express/Typescript/MongoDB.

### How to run the API

1. In your terminal, navigate to the main directory.
2. Run `npm install` to install all dependencies.
3. Run `npm run build` for the api build
4. Run `npm start:prod` to start the app.

### How to run with Docker

1. You need Docker and docker-compose.
2. In your terminal, navigate to the main directory.
3. Run `docker-compose up` to create the image.

## 5. Project structure 📁

### Backend 📂

```
|-- build
|-- node_modules
|-- src
	|-- config
		|-- config.ts
	|-- tasks
		|-- dto
			|-- create-task-dto.ts
		|-- interfaces
			|-- Task.ts
		|-- schema
			|-- Task.schema.ts
		|-- tasks.controller.spec.ts
		|-- tasks.controller.ts
		|-- tasks.module.ts
		|-- task.service.ts
		|-- task.service.spec.ts
	|-- app.controller.spec.ts
	|-- app.controller.ts
	|-- app.module.ts
	|-- app.service.ts
	|-- main.ts
|-- test
|-- .eslintrc.js
|-- .dockerignore
|-- Dockerfile
|-- docker-compose.yml
|-- .gitignore
|-- commitlint.config.js
|-- .prettierrc
|-- nodemon.json
|-- package-lock.json
|-- package.json
|-- nest-cli.json
|-- README.md
|-- tscongif.build.json
|-- tscongif.json
|-- package-lock.lock

```

## 6. Build with 🛠

### Backend 🔧

DEPENDENCIES:

- nest- Fast, unopinionated, minimalist web framework for node.
- [mongoose](https://mongoosejs.com/) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
- [rimraf](https://www.npmjs.com/package/rimraf) - The UNIX command rm -rf for node.
- [rxjs](https://www.learnrxjs.io/) - RxJS is one of the hottest libraries in web development today. Offering a powerful, functional approach for dealing with events and with integration points into a growing number of frameworks, libraries, and utilities, the case for learning Rx has never been more appealing.

DEV-DEPENDENCIES:

- [typescript](https://www.typescriptlang.org/) - TypeScript is a language for application-scale JavaScript.
- [husky](https://www.npmjs.com/package/husky) - Husky can prevent bad git commit, git push and more 🐶 woof!
- [commitlint](https://commitlint.js.org/#/) - commitlint helps your team adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.
- [prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
- [ts-node](https://www.npmjs.com/package/ts-node) - TypeScript execution and REPL for node.js, with source map support.
- [nodemon](https://nodemon.io/) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
- [eslint](https://eslint.org/) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript/Typescript code.

## 7. Database 📫

For the database i using PostgreSQL

- MongoDB
- Version: 3.6.8

## 8. Versioned 1️⃣

For the versioning, [ConventionalCommits] was used ([https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/))

I using husky for the control in commits and push

## 9. Author 🙎🏻‍♂️

***Luca Becci -** code and documentation*

- [github](https://github.com/lucabecci)
- [twitter](https://twitter.com/lucabecci)