import React from 'react';
import {Button} from "react-bootstrap";

const array = [43, 4363, 2345, 234, 564, 234, 2345, 565, 769, 7657, 546, 234, 54];
const bytesInInt32 = 4;

const onLaunchWebWorker = () => {
  const sab = new SharedArrayBuffer(bytesInInt32 * array.length);

  const intArray = new Int32Array(sab);

  intArray.set(array);

  const webWorker = new Worker(new URL("./workers/ChangeArrayWebWorker.ts", import.meta.url))
  webWorker.postMessage(sab);
}

const SharedArrayBufferExample: React.FC = () => {
  return (
    <>
      <p>{JSON.stringify(array)}</p>
      <Button onClick={onLaunchWebWorker}>Launch WebWorker</Button>
    </>
  );
};

export default SharedArrayBufferExample;
