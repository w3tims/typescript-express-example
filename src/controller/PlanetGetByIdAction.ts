import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Planet} from "../entity/Planet";

/**
 * Loads post by a given id.
 */
export async function planetGetByIdAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const planetRepository = getManager().getRepository(Planet);

    // load a post by a given post id
    const planet = await planetRepository.findOne(request.params.id);

    // if post was not found return 404 to the client
    if (!planet) {
        response.status(404);
        response.end();
        return;
    }

    // return loaded post
    response.send(planet);
}
