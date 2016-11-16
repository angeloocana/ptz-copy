# ptz-copy
================
[![Build Status](https://travis-ci.org/angeloocana/ptz-copy.svg)](https://travis-ci.org/angeloocana/ptz-copy)
[![NPM](https://img.shields.io/npm/v/ptz-copy.svg)](https://www.npmjs.com/package/ptz-copy)
[![codecov.io](http://codecov.io/github/angeloocana/ptz-copy/coverage.svg)](http://codecov.io/github/angeloocana/ptz-copy)
[![Dependency Status](https://gemnasium.com/angeloocana/ptz-copy.svg)](https://gemnasium.com/angeloocana/ptz-copy)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/angeloocana/ptz-copy)
![License](https://img.shields.io/npm/l/ptz-copy.svg)

> ptz-copy is a javascript library for coping objects
>
> Be welcome to learn, help and play!!!

## Install

Install with npm:

```bash
    $ npm install ptz-copy --save
```

or clone from github:

```bash
    $ git clone https://github.com/angeloocana/ptz-copy.git
```

## Setup

```bash
    $ npm install 
    $ typings install
```

*Add to your typings/index.d.ts

```ts
/// <reference path="../node_modules/ptz-copy/src/typings/index.d.ts" />
```

## Test

```bash
    $ npm test
``` 


## Usage

```js

import copy from "ptz-copy";

let obj = {say:"Hi!"};

let newObj = copy(obj);

```


