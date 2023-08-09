// @ts-nocheck
import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import PostMessageMultiThread from "./testers/PostMessageMultiThread";
import PostMessageMultiThreadArrayBuffer from "./testers/PostMessageMultiThreadArrayBuffer";

const threads = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

export interface IFormState {
  numberOfElements: number;
  min: number;
  max: number;
}

const ArrayBufferExample: React.FC = () => {
  const [formState, setFormState] = useState<IFormState>({
    numberOfElements: 10000,
    min: 5,
    max: 1000000,
  })

  const onChange = (e: React.FormEvent<HTMLFormElement>) => {
    setFormState({
      numberOfElements: +e.target.form[0].value,
      min: +e.target.form[1].value,
      max: +e.target.form[2].value,
    })
  }

  return (
    <>
      <Form className="Кол-во элементов d-flex gap-4 mb-3" onChange={onChange}>
        <Form.Group>
          <Form.Label>Кол-во элементов</Form.Label>
          <Form.Control type="number" required defaultValue="10000" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Минимальный элемент</Form.Label>
          <Form.Control type="number" required defaultValue="5" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Максимальный элемент</Form.Label>
          <Form.Control type="number" required defaultValue="1000000" />
        </Form.Group>
      </Form>

      <div className="d-flex gap-4">
        <div>
          {
            threads.map((thread) => (
              <PostMessageMultiThread key={thread} formState={formState} threads={thread} />
            ))
          }
        </div>
        <div>
          {
            threads.map((thread) => (
              <PostMessageMultiThreadArrayBuffer key={thread} formState={formState} threads={thread} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default ArrayBufferExample;
