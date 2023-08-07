import React, {useState} from 'react';
import {Button, Form, Spinner} from "react-bootstrap";
import {factorial} from "../../hardCalculations/factorial";

const FactorialCalculation: React.FC = () => {
  const [result, setResult] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // @ts-ignore
  const onSubmit = (e: FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();

    const value = e.target[0].value;

    setIsLoading(true);
    setResult(factorial(value));
    setIsLoading(false);
  }

  return (
    <div className="w-25">
      <h3>Without Web Worker</h3>
      <Form onSubmit={onSubmit} className="mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Number</Form.Label>
          <Form.Control required type="number" />
        </Form.Group>

        <Button type="submit">Calculate factorial</Button>
      </Form>

      {
        isLoading
          ? <Spinner animation="border" variant="primary" />
          : <p>{`Result is: ${result}`}</p>
      }
    </div>
  );
};

export default FactorialCalculation;
