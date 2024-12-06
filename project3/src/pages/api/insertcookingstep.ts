


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
    const {description} = req.body;
    
    const datainsert = await prisma.cookingStep.create({
      data: {

        description: description,
        order: null,                  
        recipeId: undefined,
        
      },
      
    });
  
    res.status(200).json(datainsert);// from online 
    
    
    

    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}
// modified from a online example