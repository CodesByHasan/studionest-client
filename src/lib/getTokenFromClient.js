import { authClient } from "./auth-client";

export const getTokenFromClient = async () => {
  const { data, error } = await authClient.token();

  if (error) {
    throw new Error("Unable to retrieve authentication token.");
  }

  return data?.token;
};