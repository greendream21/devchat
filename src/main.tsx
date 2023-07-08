import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { InjectionProvider } from "impact-app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InjectionProvider>
      <App />
    </InjectionProvider>
  </React.StrictMode>
);
