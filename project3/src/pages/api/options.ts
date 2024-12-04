import { PrismaClient } from "@prisma/client";
import {  NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();


export default async function handler(req: NextApiRequest,res:NextApiResponse) {
  try{
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed. Use GET." });
      }
    const questions = await prisma.tag.findMany({
        select: {
            name: true,
          },
    }
    );
  
    
    
    
  
      res.status(200).json(questions);
    
    
  }catch(error){
    res.status(500).json({ error: "Failed to fetch questions" });
    console.log(error)
  }


}