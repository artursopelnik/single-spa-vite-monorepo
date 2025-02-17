import "./index.css"

import {
    constructRoutes,
    constructApplications,
    constructLayoutEngine,
} from "single-spa-layout";
import {registerApplication, start, getAppNames} from "single-spa";

import microfrontendLayout from './microfrontend-layout.html?raw';
const routes = constructRoutes(microfrontendLayout)

const applications = constructApplications({
    routes,
    loadApp: ({ name }) => import(/* @vite-ignore */ name)
});
const layoutEngine = constructLayoutEngine({routes, applications, active: false});

applications.map(registerApplication);

layoutEngine.activate();
start()

if (process.env.NODE_ENV === "development") {
    console.log("Applications", getAppNames())
}