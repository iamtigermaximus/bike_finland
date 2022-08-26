import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase()

  const data = await db.collection('user_data').find({}).toArray()

  res.json({ data })
}
