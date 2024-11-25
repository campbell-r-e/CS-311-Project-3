import { PrismaClient } from "@prisma/client";
import csv from "csv-parser";
import fs from "fs";

const prisma = new PrismaClient();

async function processCSV(
  filePath: string,
  processData: (data: any[]) => Promise<void>
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const results: any[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        try {
          await processData(results);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
  });
}

async function main() {
  try {
    await processCSV("./data/ingredient.csv", async (data) => {
      for (const ingredient of data) {
        await prisma.ingredient.create({
          data: {
            name: ingredient.name,
           
          },
        });
      }
  
    });

    await processCSV("./data/tag.csv", async (data) => {
      for (const tag of data) {
        await prisma.tag.create({
          data: {
            
            name: tag.name,
          },
        });
      }
     
    });

    await processCSV("./data/cooking_method.csv", async (data) => {
      for (const method of data) {
        await prisma.cookingMethod.create({
          data: {
             name: method.name,
           
          },
        });
      }
   
    });

    
    await processCSV("./data/ingredient_tag.csv", async (data) => {
      for (const relation of data) {
        await prisma.ingredientTag.create({
          data: {
            ingredientId: parseInt(relation.ingredientId),
            tagId: parseInt(relation.tagId),
           
          },
        });
      }
   
    });
    //
    await processCSV("./data/cooking_step.csv", async (data) => {
      for (const step of data) {
        await prisma.cookingStep.create({
          data: {
            description:step.description,
            order: parseInt(step.order),
            recipeId: parseInt(step.recipeId),

         
            
            

            
           
          },
        });
      }
   
    });




    //



    
  } catch (e) {
    console.error("Error during database operation", e);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

// modifed from https://www.dolthub.com/blog/2024-06-28-dolt-and-prisma/