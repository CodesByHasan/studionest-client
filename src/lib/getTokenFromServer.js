import { headers } from "next/headers";
import { auth } from "./auth";

export const getTokenFromServer = async () => {
  const result = await auth.api.getToken({
    headers: await headers(),
  });

  return result?.token;
};