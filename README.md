# html megadraft plugin - Megadraft Plugin

## Usage

Include the plugin in the `plugins` prop of your `Megadraft` instance.

```js
import React from "react";
import ReactDOM from "react-dom";
import {MegadraftEditor} from "megadraft";

import htmlMegadraftPlugin from "html-megadraft-plugin";

class Example extends React.Component {
  render(){
    return (
      <MegadraftEditor plugins={[htmlMegadraftPlugin]} />
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("container"));
```

You can use video / normal option use or not the Fluid Width Video css-trick.

![Include youtube iframe](./iframe.jpeg "Include youtube iframe")


## ⚠️ OUTPUT RAW HTML ON YOUR WEEBSITE IS DANGEROUS ⚠️

Users can include scripts or anthing else dangerous. You should either check saved date or only allow admins to use it.


## Contributing

Install, run, test.

```
# Install npm dependencies
make setup

# Gulp dev-server task with webpack + sass running on http://localhost:8080/
make run

# Run mocha tests + eslint
make test
```

If you're constantly running tests, there's a faster alternative using mocha's
watch feature:

```
make watch_unit
```

## Releasing

There's a `prepublish` script entry on `package.json` that runs build tasks
before publishing the package.

```
npm publish
```


## Third Party

The sample plugin uses the extension icon from https://design.google.com/icons/
under [Apache License Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
