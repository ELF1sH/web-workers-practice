/* eslint-disable no-restricted-globals */
import {goThroughArray} from "../../../hardCalculations/goThroughArray";

self.addEventListener('message', (e) => {
  const result = goThroughArray(e.data);

  const bytesInFloat32 = 4;

  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
  const arrayBuffer = new ArrayBuffer(bytesInFloat32 * result.inputArr.length);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
  const inputArr = new Float32Array(arrayBuffer);

  inputArr.set(result.inputArr);

  self.postMessage({average: result.average, inputArr: inputArr.buffer}, [inputArr.buffer]);
})

export {};
