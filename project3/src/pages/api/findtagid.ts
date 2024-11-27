import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function Tagcount(){
const usersWithCount = await prisma.tag.count();
return usersWithCount;
}
const count = Tagcount();

export { count};
