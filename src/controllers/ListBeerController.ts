import {FastifyRequest, FastifyReply} from 'fastify'
import {ListBeerService} from '../services/ListBeerService'

class ListBeerController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listBeerService = new ListBeerService()

    const beers = await listBeerService.execute();

    reply.send(beers)

  }
}

export {ListBeerController}