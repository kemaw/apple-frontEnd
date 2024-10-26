import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
import App from "./App.jsx";
import "./css/styles.css";
import "./css/bootstrap.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

//<BrowserRouter> component is used to wrap your application and provide the routing functionality.

//<Routes> component wraps everything that are dependent on route.

//<Route> component defines the relationship b/n a path and a component to be rendered when the path is matched.

//<link> component is used to create links b/n different routes in your application.Replace a->Link and href-> to used for avoid refreshing the page
//to open on new page use "target_blank"
// sharedLayout components need outlet to render child rotes within thheir parent route.