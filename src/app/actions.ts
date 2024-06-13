"use server";

import { cookies } from "next/headers";

export async function createTokenCoookie(response: any) {
  //   const user = response?.data;
  cookies().set("token", response?.access_token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
  });
}
