


import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
export const config = {
  api: {
    bodyParser: true, 
  },
};

export default async function handler(req:NextApiRequest,res: NextApiResponse) {
  try{
    const randommethods: string[] = [];
    const {step} = req.body;
    var x:number = 0;
    while(x<step){
        const randomIndex = Math.floor(Math.random() * step)+1;

    
    
    const findingmethod = await prisma.cookingMethod.findFirst({
      where:{
       id:randomIndex,

  },
  select: {
    name: true, 
  },
    
   });
  
    
    
    
   if (findingmethod !== null) {
    if (findingmethod.name !== null && typeof findingmethod.name === "string") {
      randommethods.push(findingmethod.name);
    }
  }
  
    
    x++;
}
res.status(200).json(randommethods);
}catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}
// modified from a online example