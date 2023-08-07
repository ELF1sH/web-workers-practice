/* eslint-disable no-restricted-globals */
import {factorial} from "../../../hardCalculations/factorial";

self.addEventListener('message', (e) => {
  const result = factorial(e.data);

  self.postMessage(result);
})

export {};