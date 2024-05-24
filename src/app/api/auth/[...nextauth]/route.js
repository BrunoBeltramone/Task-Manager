import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import dbConnect from "@/lib/mongodb";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials.email });
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user._id.toString(), email: user.email };
        }
        throw new Error('Invalid email or password');
      }
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id;
      } else {
        console.error("Token does not have an id:", token);
      }
      return session;
    },
    events: {
      async session(message) {
        console.log('Session event:', message);
      }
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
