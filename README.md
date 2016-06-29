# Angular 2 Company Website Template

This repository holds **Company Website Template** for fast implementation of generic company website.
It is written with Angular 2, TypeScript, HTML(5), CSS3, Sass, and later on some database stuff
will be included. Most likely MongoDB. More backend stuff will be added too.

The repository includes source code of decent looking UI with good scalability to mobile browsers. 
The menu changes for mobile browsers or when browser width is scaled down.

This project uses [Angular 2 Quickstart Source Code](https://github.com/angular/quickstart) as basis,
so it may have some bit of left of that project. 
It has also some features, like Routing, from
[Angular 2 Tutorial: Tour Of Heroes](https://angular.io/docs/ts/latest/tutorial/), 
which is the official Angular 2 Tutorial.

## Prerequisites

Node.js and npm are essential to Angular 2 development. 
For more info on installing them and cloning git this repo, 
**Check out** [Angular 2 Quickstart Source Code](https://github.com/angular/quickstart) repository.

This project uses some additional npm packages, which should be installed (globally) as well. 

List of packages:
```bash
+-- concurrently@2.1.0      //This allows to run multiple tasks simultaneously when starting local server.
+-- gulp@3.9.1              //It is a build tool, this time used with Sass configuration.
+-- lite-server@2.2.0       //Local database server. Included just in case.
+-- node-sass@3.8.0         //Sass is a tool to make Css writing easier and better. Compiles scss->css.
+-- typescript@1.8.10       //TypeScript package installed just in case.
```

All packages and their implementation are preconfigured in project's files, 
so they are necessary to install.

You can install packages globally with npm by typing:
```bash
npm install -g <package>
```
For example:
```bash
npm install -g concurrently
```

Most recent version of all packages, node.js and npm are used with this project, 
but just in case, these are the versions of node.js and npm:
```bash
node --version: v6.2.1
npm --version: 3.9.3
```

The rest of the system and tools used:
* `Windows 10 64bit`    Operating System
* `Visual Studio Code`  The Editor
* `Google Chrome`       The Browser

## To run this project:

1) Install node.js and npm
2) Install all the packages globally
3) Clone this Git repository.
4) Go to repository's folder and run 
```bash
npm install
```
5) Run the project
```bash
npm start
```

## Folder structure

This project has self designed structure. 
All these folders have configured to work this way:

```bash
[app]           // JavaScript files compiled by TypeScript compiler. DO NOT EDIT.
[css]           // Css files compiled by sass compiler. DO NOT EDIT.
[html]          // Html files for Angular 2 components. You may edit.
[images]        // Images. You may edit.
[sass]          // Sass folder for .scss style files. You may edit.
[ts]            // TypeScript files. The main Angular2 backbone. You may edit.
gulpfile.js     // Gulp configuration for runtime Sass->Css compiling. DO NOT EDIT.
```

This is just a guideline, so you know how to work with this project. All the configurations
are set to **package.json**, **tsconfig.json** and **systemjs.config.js** files.

## More info

Please be free to ask. I can be contacted via email.