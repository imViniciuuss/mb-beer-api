import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";

class ListBeerService{
  async execute(){

    const beers = await prismaClient.beer.findMany()

    return beers
  }
}

export {ListBeerService}