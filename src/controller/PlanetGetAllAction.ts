import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Planet} from "../entity/Planet";

/**
 * Loads all posts from the database.
 */
export async function planetGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const planetRepository = getManager().getRepository(Planet);

    // load a post by a given post id
    const planets = await planetRepository.find();

    // TO DO: check if to allow requests from certain sources
    response.header("Access-Control-Allow-Origin", "*");

    // return loaded posts
    response.send(planets);
}