# lite-webpack-react-seed-project
Yet another lightweight Webpack/React seed project which aims to define best practices when it comes to structuring production web applications.

*Last updated as of October 2018, see notes on [Maintenance](#maintenance) below.*

## Description

This is a bare bones and lightweight seed project that can be customised as per your requirements.

This seed project comes pre-configured with the following technologies:

* **Webpack** - Code bundling
* **React** - JS view framework
* **Jest/Enzyme** - Unit/snapshot testing
* **Babel** - Transpilation of ES6/7/8 code
* **ESLint/Stylelint** - Provides linting of ES and SCSS/CSS code
* **babel-polyfill/whatwg-fetch** - JS polyfill's for maximum browser compatibility
* **Autoprefixer** - Prefixes CSS rules for maximum browser compatibility

I have purposedly left this seed project minimal so that others can use this as a base and add in whatever they require (such as **Redux**, **TypeScript**, **React Router**, **RxJS**, etc)

## Requirements

 * **node 8.x.x** or newer
 * **npm 5.x.x** or newer

## Usage

* **npm install** - Installs all required dependencies
* **npm run serve** - Spawns a hot-reloading enabled development server
* **npm run lint** - Runs the ES and CSS/SCSS linter
* **npm run test** - Runs all unit tests
* **npm run test:watch** - Runs all unit tests in watch mode
* **npm run build** - Triggers a production build, complete with code minification and automatic linting and running of unit tests.

## Maintenance

The JS landscape is constantly evolving and library projects are always being updated on a daily basis. 

Having said that, I may not always be able to keep this repository up to date with the latest library versions.

Therefore, I would welcome any PR's that aim to update any dependencies or improvements to the project set-up.

## Troubleshooting

If you are using a non-LTS version of NodeJS then you may not get the **node-sass** binaries pre-built out of the box as you do **npm install**. 

In this case you could encounter some errors by **node-gyp** as it tries to compile the **node-sass** bindings.

If this is the case, make sure you meet the pre-requisites for **node-gyp** as per [https://github.com/nodejs/node-gyp#installation](https://github.com/nodejs/node-gyp#installation)

## License

This code is released under [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)

## Contact

Author: **Waleed Amjad**

You may contact me via email: **sbm007 at gmail dot com**
