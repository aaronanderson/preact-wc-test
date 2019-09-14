# preact-wc-test
A sample application that combines Preact, an unmodified React component, and a LitElement Web Component together to test interoperability

## Motivation

React is a popular web framework but it is quite a large library that includes a virtual DOM, custom elements, and custom eventing. Most of these features are now available in the web platform in the form of the shadow DOM, custom elements, and custom events.

[Preact X](https://preactjs.com/) is an alternative React compatible framework for running react applications in. It has a much smaller library size and utilizes web platform like events and the DOM which makes it more [amiable to integrate](https://custom-elements-everywhere.com/) with web components.

[LitElement](https://lit-element.polymer-project.org/) is a thin layer framework to assist with managing web component configuration and lifecycle.

This example illustrates how to configure [webpack](https://webpack.js.org/),[TypeScript](https://www.typescriptlang.org/), Preact X to build a simple application that interfaces with both a web component and an unmodified stylized [React button component](https://github.com/Workday/canvas-kit/tree/master/modules/button/react).


Configuring and building this trivial example took surprisingly more time than expected. As with many JavaScript applications much trial and error was required to discover optimal configurations and features to accomplish a minimal application build.

Here are the installation requirements:

### Node Setup

1. Install nodejs and yarn

`sudo apt-get install nodejs yarn`

2. Setup a local user node repository

```
mkdir ~/.npm-global
 npm config set prefix '~/.npm-global'
 export PATH=~/.npm-global/bin:$PATH
```

### Build and Run
1. Once the source is checked out run yarn to download all of the NPM dependencies:

`yarn install`

2. Build the project

`yarn build`

3. Run the webpack development server to view the application. Note hot deployment is enabled and local file changes will immediately be reflected in the browser without a refresh.

`yarn start`


Here are some helpful links that aided me in successfully configuring the application:


[Atom TypeScript Support](https://github.com/microsoft/typescript-lit-html-plugin/blob/master/README.md#with-atom)

[Preact Custom Element Module Augmentation](https://github.com/preactjs/preact/issues/1180#issuecomment-530038389)

[TypeScript Custom Event Listeners](https://github.com/Microsoft/TypeScript/issues/28357)
