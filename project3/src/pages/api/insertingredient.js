import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: true, 
  },
};

export default async function handler(req, res) {
  try {
    console.log("Request Method:", req.method);
    console.log("Request Body:", req.body);

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed. Use POST." });
    }

    const { ingredientname, tagname } = req.body;

    if (!ingredientname || !tagname) {
      console.error("Missing required fields:", { ingredientname, tagname });
      return res.status(400).json({ error: "Ingredient name and tag are required." });
    }

   
    const existingIngredient = await prisma.ingredient.findFirst({
      where: {
        name: ingredientname,
        tags: {
          some: {
            tag: {
              name: tagname,
            },
          },
        },
      },
    });

    if (existingIngredient) {
      return res.status(400).json({
        duplicateissue: "That ingredient and tag combination already exists in the database.",
      });
    }

    // Check if tag already exists
    const existingTag = await prisma.tag.findUnique({
      where: { name: tagname },
    });

    console.log("Existing Tag:", existingTag);

   
    const tagOperation = existingTag
      ? { connect: { id: existingTag.id } }
      : { create: { name: tagname } };

    console.log("Tag Operation:", tagOperation);

   
    const datainsert = await prisma.ingredient.create({
      data: {
        name: ingredientname,
        tags: {
          create: [
            {
              tag: tagOperation,
            },
          ],
        },
      },
    });

    console.log("Data Insert Successful:", datainsert);
    return res.status(200).json({ success: true, data: datainsert });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
}
