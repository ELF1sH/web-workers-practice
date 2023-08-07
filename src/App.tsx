import React from 'react';
import FactorialCalculation from "./components/factorialCalculations/FactorialCalculation";
import FactorialCalculationWebWorker from "./components/factorialCalculationsWebWorker/FactorialCalculationWebWorker";

const App = () => {
  return (
    <div className="p-3">
      <h1 className="text-center mb-3">Step 1. Factorial calculation. Via PostMessage</h1>
      <div className="d-flex gap-5 mb-4">
        <FactorialCalculation />
        <FactorialCalculationWebWorker />
      </div>

      <h1 className="text-center mb-3">Step 2. Going through array with progress</h1>
    </div>
  );
}

export default App;
