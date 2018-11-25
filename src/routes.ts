import {planetGetAllAction} from "./controller/PlanetGetAllAction";
import {planetSaveAction} from "./controller/PlanetSaveAction";
import {planetGetByIdAction} from "./controller/PlanetGetByIdAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/planets/:id",
        method: "get",
        action: planetGetByIdAction
    },
    {
        path: "/planets",
        method: "get",
        action: planetGetAllAction
    },
    {
        path: "/planets",
        method: "post",
        action: planetSaveAction
    },
];