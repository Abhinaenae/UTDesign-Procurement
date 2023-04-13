// admin to create projects
// import { Prisma, PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient({ log: ['query'] })

// import { ok } from "assert";
// import { NextApiRequest, NextApiResponse } from "next";

// // make sure it is admin only
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if(req.method === 'POST'){
//         const body = req.body
//     }

//     res.json({ 
       
    
    
//     })
    // console.log('REQUEST BODY',req.body)

    //hard code role id of admin, if user id is admin then allow them to create
    //some function which accepts same structure that accepts in the database and creates a similar 
    //we should get some methods from prisma

//}


import { Prisma, PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient({ log: ['query'] })

async function createProject(req:any) {
      await prisma.project.create({
        data: req,
      })
}

// createProject()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })



  //nextjs
  export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const method = req.method;

    let result;
    if(req.method === 'POST'){
         result = await createProject(req.body);
         res.json({result, message: 'project with ${projectId} created'})
    }
}
  
