import React from "react";
import ReactDOM from "react-dom/client";
import { pdfjs } from 'react-pdf';
import App from "./App";
import AppProvider from "./context/app/AppProvider";

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
