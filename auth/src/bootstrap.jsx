import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

export const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ??
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  onNavigate && history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      console.log("### history.location.pathname: ", history.location.pathname);
      console.log("### nextPathname: ", nextPathname);
      if (history.location.pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};
