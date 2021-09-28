import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

export const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory ?? createMemoryHistory();

  onNavigate && history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      if (history.location.pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};
