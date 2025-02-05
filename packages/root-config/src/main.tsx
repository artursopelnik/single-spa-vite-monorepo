import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { registerApplication, start, getAppNames } from "single-spa"
import apps from "./apps"

apps.map(({ name, activeWhen }) =>
  registerApplication({
    name,
    activeWhen,
    app: () => import(/* @vite-ignore */ name),
  }),
)
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "development") {
  console.log("Applications", getAppNames())
  // enable the single spa import map override panel in dev mode
  localStorage.setItem("imo-ui", "true")
} else {
  // disable the single spa import map override panel for built environments (can still be accessed using the browser extension)
  localStorage.setItem("imo-ui", "false")
}
start()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <span>App</span>
  </StrictMode>,
)
