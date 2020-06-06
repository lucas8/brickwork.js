import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, isChecked } = JSON.parse(req.body)
  const result = await prisma.item.create({
    data: {
      name,
      isChecked,
    },
  })
  res.json(result)
}
