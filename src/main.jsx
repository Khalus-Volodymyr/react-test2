import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FeedbackForm />
  </StrictMode>
);
