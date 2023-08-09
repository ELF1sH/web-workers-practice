/* eslint-disable no-restricted-globals */
import {goThroughArray} from "../../../hardCalculations/goThroughArray";

self.addEventListener('message', (e) => {
  const result = goThroughArray(e.data);

  self.postMessage(result);
})

export {};