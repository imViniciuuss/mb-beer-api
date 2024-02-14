import {FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions} from 'fastify'
import { CreateBeerController } from '../controllers/CreateBeerController'
import { ListBeerController } from '../controllers/ListBeerController'
import { DeleteBeerController } from '../controllers/DeleteBeerController'


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

  fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateBeerController().handle(request, reply)
  })

  fastify.get("/beers", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListBeerController().handle(request, reply)
  })

  fastify.delete("/delete", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteBeerController().handle(request, reply)
  })

}