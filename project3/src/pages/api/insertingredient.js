


import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();
export  async function insertIngredientOnly(req,res) {
  const { ingredientname } = req.body;

  try {
    const datainsert = await prisma.ingredient.create({
      data: { name: ingredientname },
    });

    return res.status(200).json(datainsert);
  } catch (error) {
     
    if (error.code === "P2002") {
      console.warn("Duplicate tag detected, retrying with ingredient only.");
      const duplicateissue = "That ingredient and tag is already in the database."
      return res.status(500).json({duplicateissue});
    }
    console.error("Error inserting ingredient:", error);
    return res.status(500).json({ error: "Failed to insert ingredient" });
  }
}

export default async function handler(req,res) {
  try{
    const { ingredientname, tagname } = req.body;
    const existingTag = await prisma.tag.findUnique({
      where: { name: tagname },
    });
    const tagOperation = existingTag
  ? { connect: { id: existingTag.id } }
  : { create: { name: tagname } };

    
    const datainsert = await prisma.ingredient.create({
      data: {
        name: ingredientname,
        tags: {
          create: 
            [
              {
                tag: tagOperation, 
              },
            ],
        },
      },
      
    });
  
    res.status(200).json(datainsert);
    
    
  

    
    
  }catch(error){
    console.error("Error:", error);

   
    if (error.code === "P2002") {
      console.warn("Duplicate tag detected, retrying with ingredient only.");
      return insertIngredientOnly(req, res);
    }

    return res.status(500).json({ error: "Unexpected error occurred" });
    
  }


}
// modified from a online example