import React, {useEffect, useMemo, useState} from 'react';
import {Button, ButtonGroup, Form, Spinner} from "react-bootstrap";

const FactorialCalculationWebWorker: React.FC = () => {
  const [result, setResult] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const worker = useMemo(
    () => new Worker(new URL("./workers/FactorialWorker.ts", import.meta.url)),
    []
  );

  useEffect(() => {
    if (window.Worker) {
      worker.onmessage = (e) => {
        setResult(e.data);
        setIsLoading(false);
      }
    }
  })

  // @ts-ignore
  const onSubmit = (e: FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();

    const value = e.target[0].value;

    setIsLoading(true);
    worker.postMessage(value);
  }

  const onCancel = () => {
    worker.terminate();
    setIsLoading(false);
  }

  return (
    <div className="w-25">
      <h3>With Web Worker</h3>
      <Form onSubmit={onSubmit} className="mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Number</Form.Label>
          <Form.Control required type="number" />
        </Form.Group>

        <ButtonGroup>
          <Button type="submit" disabled={isLoading}>Calculate factorial</Button>
          <Button variant="danger" onClick={onCancel}>Cancel calculation</Button>
        </ButtonGroup>
      </Form>

      {
        isLoading
          ? <Spinner animation="border" variant="primary" />
          : <p>{`Result is: ${result}`}</p>
      }
    </div>
  );
};

export default FactorialCalculationWebWorker;
