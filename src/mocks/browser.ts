import { setupWorker } from "msw/browser";
import { queryHandlers } from "./query-handlers";
import { mutationHandlers } from "./mutation-handlers";

export const worker = setupWorker(...queryHandlers, ...mutationHandlers);
