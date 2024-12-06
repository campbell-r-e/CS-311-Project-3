


import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
export const config = {
  api: {
    bodyParser: true, 
  },
};

export default async function handler(req,res) {
  try{
    const {name} = req.body;
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
  }

  
  if (!name || typeof name !== "string") {
      return res.status(400).json({ error: "Invalid or missing methodname" });
  }

    
    const datainsert = await prisma.cookingMethod.create({
      data: {
           
           name:name.trim(),
        
      },
      
    });
  
    res.status(200).json(datainsert);// from online 
    
    
    

    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}
// modified from a online example