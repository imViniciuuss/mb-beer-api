
import prismaClient from "../prisma";

interface CreateBeerProps{
  name: string,
  type: string,
  description: string,
  ingredient: string[]
}

class CreateBeerService {
  async execute({name, type, description, ingredient}: CreateBeerProps){

    if(!name || !type || !description || !ingredient){
      throw new Error("Preencha todos os campos")
    }

    const beer = await prismaClient.beer.create({
      data: {
        name,
        type,
        ingredient,
        description,
        status: true,
      }
    })

    return {beer}
  }
}

export {CreateBeerService}