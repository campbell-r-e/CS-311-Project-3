import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function ingredientcount(){
const usersWithCount = await prisma.ingredient.count();
return usersWithCount;
}
const count = ingredientcount();

export { count};
