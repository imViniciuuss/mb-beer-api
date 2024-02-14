import {FastifyRequest, FastifyReply} from 'fastify'

import {CreateBeerService} from '../services/CreateBeerService'

class CreateBeerController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const {name, type, description, ingredient} = request.body as {name: string, type: string, description: string, ingredient: string[]}

    const beerService = new CreateBeerService()
    const beer = await beerService.execute({name, type, description, ingredient})

    reply.send(beer)
  }
}

export {CreateBeerController}