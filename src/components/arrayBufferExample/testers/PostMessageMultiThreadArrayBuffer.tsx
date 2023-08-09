import React, {useRef, useState} from 'react';
import {Button, Spinner} from "react-bootstrap";
import {generateRandomIntArray} from "../../../utils/random/generateRandomIntArray";
import {IFormState} from "../ArrayBufferExample";

interface PostMessageMultiThreadArrayBufferProps {
  formState: IFormState;
  threads: number;
}

const PostMessageMultiThreadArrayBuffer: React.FC<PostMessageMultiThreadArrayBufferProps> = ({ formState, threads }) => {
  const [result, setResult] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [finishTime, setFinishTime] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const workersFinished = useRef<number>(0);

  const onClick = () => {
    const arrays = Array.from({length: threads}, () => (
      generateRandomIntArray(+formState.numberOfElements / threads, +formState.min, +formState.max)
    ))

    setStartTime(performance.now());
    setFinishTime(0);
    setIsLoading(true);
    setResult(0);

    workersFinished.current = 0;

    const workers = Array.from({length: threads}, () => (
      new Worker(new URL("../workers/ArrayWorkerArrayBuffer.ts", import.meta.url))
    ));

    workers.forEach((worker, idx) => {
      worker.onmessage = (e) => {
        setResult((prev) => prev + e.data.average);
        workersFinished.current++;

        if (workersFinished.current === threads) {
          setFinishTime(performance.now());
          setIsLoading(false);

          setResult((prev) => prev / threads);
        }
      }

      worker.postMessage(arrays[idx], []);
    })
  }

  return (
    <div>
      <Button type="submit" id="postMessage2threadBtn" onClick={onClick}>{`Вычислить с postMessage (Потоков ${threads}) (ArrayBuffer)`}</Button>
      {
        isLoading
          ? <Spinner className="d-block" animation="border" variant="primary" />
          : <p>{`Result is: ${result}`}</p>
      }
      {
        startTime && finishTime
          ? (
            <p>{`${Math.round((finishTime - startTime) * 100) / 100}ms`}</p>
          )
          : null
      }
    </div>
  );
};

export default PostMessageMultiThreadArrayBuffer;
