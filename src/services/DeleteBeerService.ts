import prismaClient from "../prisma"

interface DeleteBeerProps{
  id: string
}

class DeleteBeerService{
  async execute({id}: DeleteBeerProps){

    if(!id){
      throw new Error("Coloque um ID!")
    }

    const findBeer = await prismaClient.beer.findFirst({
      where: {
        id: id
      }
    })

    if(!findBeer){
      throw new Error("Cliente inexistente!")
    }

    await prismaClient.beer.delete({
      where: {
        id: findBeer.id
      }
    })

    return {message: "Deletado com sucesso!"}

  }
}

export {DeleteBeerService}