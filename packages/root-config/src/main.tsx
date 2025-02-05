import "./index.css"

import {registerApplication, start, getAppNames} from "single-spa"
import apps from "./apps"

apps.map(({name, activeWhen}) => {
    return registerApplication({
        name,
        activeWhen,
        app: () => import(/* @vite-ignore */ name),
    })
})

start()

if (process.env.NODE_ENV === "development") {
    console.log("Applications", getAppNames())
}