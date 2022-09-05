import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDatabase } from '../../../lib/mongodb'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password, firstName, lastName, mobile } =
          credentials as {
            firstName: string
            lastName: string
            mobile: number
            email: string
            password: string
          }
        // perform you login logic
        const { db } = await connectToDatabase()

        const usersCollection = await db.collection('user_data')

        const user = await usersCollection.findOne({
          email: email,
          password: password,
        })
        // find out user from db
        if (!user) {
          throw new Error('No user found!')
        }
        // if (email !== 'john@gmail.com' || password !== '1234') {
        //   throw new Error('invalid credentials')
        // }

        // if everything is fine
        return {
          email: user.email,
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    // error: '/auth/error',
    //signOut: '/auth/signin',
  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role
      }
      // return final_token
      return params.token
    },
  },
}

export default NextAuth(authOptions)
