import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient()


db.snippet.create({
    data:{
        title:'new snippet',
        code:'(a,b) => a + b'
    }
})