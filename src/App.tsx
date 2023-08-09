import React from 'react';
import FactorialCalculation from "./components/factorialCalculations/FactorialCalculation";
import FactorialCalculationWebWorker from "./components/factorialCalculationsWebWorker/FactorialCalculationWebWorker";
import ArrayBufferExample from "./components/arrayBufferExample/ArrayBufferExample";

const App = () => {
  return (
    <div className="p-3">
      <h1 className="text-center mb-3">Step 1. Factorial calculation. Via PostMessage</h1>
      <div className="d-flex gap-5 mb-4">
        <FactorialCalculation />
        <FactorialCalculationWebWorker />
      </div>
      <hr />

      <h1 className="text-center mb-3">Step 2. Going through array with progress</h1>
      <hr />

      <h1 className="text-center mb-3">Step 3. Sending data via ArrayBuffer and multiple threads</h1>
      <ArrayBufferExample />
      <hr />

      <h1 className="text-center mb-3">Step 4. Sending data via SharedArrayBuffer</h1>
      <hr />

      <h1 className="text-center mb-3">Step 5. DOM handling</h1>
      <hr />
    </div>
  );
}

export default App;
