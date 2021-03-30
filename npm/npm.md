# Node.js NPM

## What is NPM?

NPM is a package manager for Node.js packages, or modules if you like.

`www.npmjs.com` hosts thousands of free packages to download and use.

The NPM program is installed on your computer when you install Node.js

## What is a Package?

A package in Node.js contains all the files you need for a module.

Modules are JavaScript libraries you can include in your project.

## Download a Package

Open the command line interface and tell NPM to download the package you want.

> Download "upper-case":
> `npm install upper-case`

NPM creates a folder named "node_modules", where the package will be placed.

All the packages you install in the future will be placed in this folder.

The project now has a folder structure like this:

`C:\Users\My Name\node_modules\upper-case`

## Using a Package

Once the package is installed, it is ready to use.

Include the "upper-case" package the same way you include any other module:

> `var uc = require('upper-case');