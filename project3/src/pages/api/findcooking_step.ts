


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
    const randomDescriptions: string[] = [];
    const {step} = req.body;
    let x:number = 0;
    const totalSteps = await prisma.cookingStep.count();

    while(x<step){
        const randomIndex = Math.floor(Math.random() * totalSteps)+1;

    
    
    const findingcookingstep = await prisma.cookingStep.findFirst({
      where:{
       id:randomIndex,

  },
  select: {
    description: true, 
  },
    
   });
  
    
    
    
   if (findingcookingstep !== null) {
    if (findingcookingstep.description !== null && typeof findingcookingstep.description === "string") {
      randomDescriptions.push(findingcookingstep.description);
    }
  }
  
    
    x++;
}
res.status(200).json({ descriptions: randomDescriptions });

}catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}
// modified from a online example