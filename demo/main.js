/*
 * Copyright (c) 2017, Charles Perinet <charles.perinet@gmail.com>
 *
 * License: MIT
 */

import React from "react";
import ReactDOM from "react-dom";
import {MegadraftEditor} from "megadraft";
import {editorStateFromRaw} from "megadraft/lib/utils";

import plugin from "../src/plugin";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: editorStateFromRaw(null)
    };
    this.onChange = ::this.onChange;
  }

  onChange(content) {
    this.setState({content});
  }

  render() {
    const pluginName = "html megadraft plugin";
    return (
        <div className="content">
          <header>
            <h1>{pluginName} - Megadraft Plugin</h1>
          </header>

          <div className="editor">
            <MegadraftEditor plugins={[plugin]} editorState={this.state.content} onChange={this.onChange} />
          </div>
        </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("container"));
