import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";
import { Adapter } from "next-auth/adapters";
import { AuthOptions, DefaultSession, getServerSession } from "next-auth";

const prisma = new PrismaClient();

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authConfig = {
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log(user);
      if (user) {
        token.id = user.id;
      } else {
        const dbUser = await prisma.user.findUnique({
          where: {
            email: token.email!,
          },
        });

        if (!dbUser) {
          throw new Error("No user with this email found");
        }

        token.id = dbUser.id;
        token.name = dbUser.name;
        token.email = dbUser.email;
        token.picture = dbUser.image;
      }

      return token;
    },

    async session({ token, session }) {
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name,
          email: token.email,
          image: token.picture,
        };
      }

      return session;
    },

    async redirect() {
      return "/explore";
    },
  },
} satisfies AuthOptions;

export function getSession() {
  return getServerSession(authConfig);
}
