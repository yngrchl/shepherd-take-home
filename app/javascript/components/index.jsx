import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css"

document.addEventListener("turbo:load", () => {
  const root = createRoot(document.getElementById("root"));

  root.render(<App />);
});
