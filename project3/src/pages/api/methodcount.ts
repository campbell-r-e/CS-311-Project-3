


import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";

const prisma = new PrismaClient();
export const config = {
  api: {
    bodyParser: true, 
  },
};

export default async function handler(res: NextApiResponse) {
  try{
  
    
    const findmethodcount = await prisma.cookingMethod.count();
  
    res.status(200).json(findmethodcount);
    
    
    

    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}
// modified from a online example