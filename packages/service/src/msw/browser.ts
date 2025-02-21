import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const createWorker = async () => {
  const worker = setupWorker(...handlers);
  return worker;
};
