import { v4 as uuidv4 } from "uuid";

// '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
export const generateUUID = (option?: "1") => {
  const parts = uuidv4().split("-");

  if (option && option === "1") return parts[0];

  return parts.join("-");
};
