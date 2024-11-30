


import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();


export default async function handler(req:NextApiRequest,res: NextApiResponse) {
  try{
    const { methodname} = req.body;
    
    const datainsert = await prisma.cookingMethod.create({
      data: {
           name:methodname,
        
      },
      
    });
  
    res.status(200).json(datainsert);// from online 
    
    
    

    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}
// modified from a online example