import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google"
import { User } from "./modals/User";
import bcrypt from "bcryptjs";
import { ConnectToDB } from "./utils";
// Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google,
    Credentials({
      authorize: async (credentials) => {
        await ConnectToDB();

        let user = await User.findOne({ email: credentials.email });

        if (!user) {
          return null;
        }

        let ispassword = bcrypt.compareSync(
          credentials.password,
          user.password
        );

        if (!ispassword) return null;

        return user;
      },
    }),
  ],
});
