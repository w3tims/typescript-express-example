import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Planet} from "../entity/Planet";

/**
 * Saves given post.
 */
export async function planetSaveAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const planetRepository = getManager().getRepository(Planet);

    // create a real post object from post json object sent over http
    const newPlanet = planetRepository.create(request.body);

    // save received post
    await planetRepository.save(newPlanet);

    // return saved post back
    response.send(newPlanet);
}