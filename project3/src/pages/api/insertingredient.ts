


import { PrismaClient } from "@prisma/client";

import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
export  async function insertIngredientOnly(req:NextApiRequest,res: NextApiResponse) {
  const { ingredientname } = req.body;

  try {
    const datainsert = await prisma.ingredient.create({
      data: { name: ingredientname },
    });

    return res.status(200).json(datainsert);
  } catch (error) {
    console.error("Error inserting ingredient:", error);
    return res.status(500).json({ error: "Failed to insert ingredient" });
  }
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
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as any).code === "P2002"
    ) {
      
      return insertIngredientOnly(req, res);
    }

    return res.status(500).json({ error: "Unexpected error occurred" });

}}
// modified from a online example