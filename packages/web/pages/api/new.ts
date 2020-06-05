import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const { name, isChecked } = JSON.parse(req.body)
  const result = await prisma.item.create({
    data: {
      name,
      isChecked,
    },
  })
  res.json(result)
}
