import { LoggedInUserType } from "@/types/general";
import { atom } from "recoil";

const exisitingUser = localStorage.getItem("espUser");
const parsedUser = JSON.parse(exisitingUser);
export const userState = atom<LoggedInUserType | null>({
  key: "user",
  default: parsedUser ?? null,
});
