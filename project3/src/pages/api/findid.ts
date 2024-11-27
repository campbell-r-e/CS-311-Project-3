import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const usersWithCount = await prisma.ingredient.count();


export { };
