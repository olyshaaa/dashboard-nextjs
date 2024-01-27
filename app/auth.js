import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./authconfig"
import {connectToDb} from "./lib/utils"
import { User } from "./lib/models"
import bcrypt from "bcrypt"


const login = async (credentials) => {
    try {
      connectToDb();
      console.log('Attempting login with credentials:', credentials);
      const user = await User.findOne({ username: credentials.username });

      if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

      const isPasswordCorrect = await bcrypt.compare(
        credentials.password,
        user.password
      );

      if (!isPasswordCorrect) throw new Error("Wrong credentials!");


        /* const { NEXT_REDIRECT, ...filteredUser } = user;

        return filteredUser; */
        console.log('Login successful. Returning user:', user);
        return user
    }  catch (err) {
      console.log(err);
      return null
    }
}


export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log('Authorizing with credentials:', credentials);
        try {
          const user = await login(credentials);
          console.log('Authorization successful. Returning user:', user);
          return Promise.resolve({
            username: user.username,
            email: user.email,
            img: user.img || '',
          });
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log('JWT Callback - Token:', token);
      console.log('user from token', user);
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      console.log('Session Callback - Session:', session);
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});