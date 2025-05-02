import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProvider from "./context/app/AppProvider";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
