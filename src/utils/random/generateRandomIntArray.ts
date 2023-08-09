import {generateRandomInt} from "./generateRandomInt";

export const generateRandomIntArray = (length: number, min: number, max: number) => {
  return Array.from({ length }, () => generateRandomInt(min, max));
}