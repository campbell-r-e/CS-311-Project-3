


import { PrismaClient } from "@prisma/client";

import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
export  async function g(req:NextApiRequest,res: NextApiResponse) {
  const ingredientname = req.body;
  const datainsert = await prisma.ingredient.create({
    data: {
      name: ingredientname,
      
}});

  res.status(200).json(datainsert);// from online 
}


export default async function handler(req:NextApiRequest,res: NextApiResponse) {
  try{
    const { ingredientname, tagname } = req.body;
    const datainsert = await prisma.ingredient.create({
      data: {
        name: ingredientname,
        tags: {
          create: [
              {
                  tag: {
                    create: { name: tagname}, 
                  },
                },
          
          ],
        },
      },
      
    });
  
    res.status(200).json(datainsert);// from online 
    
    
  

    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    g(req,res);
    console.log(error)
  }


}
// modified from a online example