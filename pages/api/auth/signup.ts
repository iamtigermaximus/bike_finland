import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'
import { v4 as uuidv4 } from 'uuid'
import { hash } from 'bcryptjs'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase()
  // Take user input
  const { firstName, lastName, mobile, email, password } = req.body
  // Insert a document into the collection
  const response = await db.collection('user_data').insertOne({
    id: uuidv4(),
    firstName,
    lastName,
    mobile,
    email,
    password: await hash(password, 12),
    completed: false,
    createdAt: new Date(),
  })

  console.log(response)
  // Send a response
  res.status(200).json({
    data: await db.collection('user_data').findOne({ id: response.insertedId }),
    message: 'User added successfully',
  })
}

export default handler
