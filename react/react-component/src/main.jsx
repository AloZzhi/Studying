import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./communicate/demo3/Grandfather";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
