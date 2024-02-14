import {FastifyRequest, FastifyReply} from 'fastify'
import { DeleteBeerService } from '../services/DeleteBeerService'



class DeleteBeerController{
  async handle(request: FastifyRequest, reply: FastifyReply){

    const {id} = request.query as {id: string}

    const beerService = new DeleteBeerService()

    const beer = await beerService.execute({id})

    reply.send(beer)
  }
}

export {DeleteBeerController}