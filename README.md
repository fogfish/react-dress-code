# React Dress Code

The library implements a [react.js](https://reactjs.org) interface to [Dress Code](https://github.com/zalando/dress-code). Dress Code is a style library developed by Zalando Brand Solutions department to solve the challenge of consistency between multiple application.

[![NPM](https://img.shields.io/npm/v/react-dress-code.svg)](https://www.npmjs.com/package/react-dress-code)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**DO NOT USE: support is discontinued**

Please checkout other Open Source Alternatives https://blueprintjs.com

## Key features

Features of style library is well document by [original documentation](http://zalando.github.io/dress-code/index.html). This library re-uses original notation to simplify application design and re-usability of concepts and patterns.

React extension of Dress Code reduces amount of boilerplate code, while you are designing your applications

Without this library
```javascript
const App = () => (
   <button class="dc-btn dc-btn--primary">Primary Button</button>
)
``` 

With this library, you save number key strokes
```javascript
import { Button } from 'react-dress-code'

const App = () => (
   <Button primary>Primary Button</Button>
)
```

See [examples](example) and [demo](.) of the library for details.  

## Getting started 

The latest version of the library is available at its `master` branch. All development, including new features and bug fixes, take place on the `master` branch using forking and pull requests as described in contribution guidelines.

Add the library to you application

```
npm install --save react-dress-code
```

or development version 
```
npm install --save git+https://git@github.com/fogfish/react-dress-code.git
```


Run a storybook as library demo

```
npm run storybook
```


## How To Contribute 

The library is MIT licensed and accepts contributions via GitHub pull requests. The development requires essential Node.js development tools. 


### local development

Now you're ready to run a local version of rollup that will watch your `src/` component and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start
```

The library provides an `storybook` for development purposes


```bash
npm run storybook
```


### commit message

The commit message helps us to write a good release note, speed-up review process. The message should address two question what changed and why. The project follows the template defined by chapter [Contributing to a Project](http://git-scm.com/book/ch5-2.html) of Git book.

>
> Short (50 chars or less) summary of changes
>
> More detailed explanatory text, if necessary. Wrap it to about 72 characters or so. In some contexts, the first line is treated as the subject of an email and the rest of the text as the body. The blank line separating the summary from the body is critical (unless you omit the body entirely); tools like rebase can get confused if you run the two together.
> 
> Further paragraphs come after blank lines.
> 
> Bullet points are okay, too
> 
> Typically a hyphen or asterisk is used for the bullet, preceded by a single space, with blank lines in between, but conventions vary here
>
>


### bugs

If you experience any issues with the library, please let us know via [GitHub issues](https://github.com/fogfish/datum/issue). We appreciate detailed and accurate reports that help us to identity and replicate the issue. 

* **Specify** the configuration of your environment. Include which operating system you use and the versions of runtime environments. 

* **Attach** logs, screenshots and exceptions, in possible.

* **Reveal** the steps you took to reproduce the problem, include code snippet or links to your project.



## License

Copyright (c) 2018 Dmitry Kolesnikov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
