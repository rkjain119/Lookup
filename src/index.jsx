import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import "./index.css"
import App from "./App"
import { ResultContextProvider } from "./contexts/ResultContextProvider"
import { DarkModeContextProvider } from "./contexts/DarkModeContextProvider"

ReactDOM.render(
  <DarkModeContextProvider>
    <ResultContextProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </ResultContextProvider>
  </DarkModeContextProvider>,
  document.getElementById("root")
)
