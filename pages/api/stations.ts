import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase()

  const data = await db
    .collection('bike_stations2')
    .find({})
    .limit(1000)
    .toArray()

  res.json({ data })
}
