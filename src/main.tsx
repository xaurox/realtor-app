import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { NbrbProvider } from "./contexts/nbrb.context";

import App from "./app/app.component";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NbrbProvider>
        <App />
      </NbrbProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
