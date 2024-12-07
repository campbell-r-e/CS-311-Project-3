


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
    const {tagName} = req.body;
    
    const findingredient = await prisma.ingredient.findFirst({
      where:{
        tags: {
            some: {
              tag: {
                name: tagName,
              },
            },
            
          }
          
          

  },
  select: {
    name: true, 
  },

});
  
    res.status(200).json(findingredient);
    
    
    

    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}
// modified from a online example