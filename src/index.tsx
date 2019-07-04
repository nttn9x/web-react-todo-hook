import "./utils/support-old-browsers.util";

import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import Route from "./routes/index.route";

import WebFont from "webfontloader";

import * as serviceWorker from "./serviceWorker";

import "./i18n";

function generateUI(): void {
  const root: HTMLElement = document.createElement("div");
  root.id = "dforoot";

  document.body.append(root);

  ReactDOM.render(<Route />, root);
}

function loadFont(): void {
  WebFont.load({
    google: {
      families: ["Roboto:300,400,500"]
    }
  });
}

function createMagic() {
  generateUI();

  loadFont();

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}

// this is a magic
createMagic();
