import React from 'react';
import FactorialCalculation from "./components/factorialCalculations/FactorialCalculation";
import FactorialCalculationWebWorker from "./components/factorialCalculationsWebWorker/FactorialCalculationWebWorker";

const App = () => {
  return (
    <>
      <h1 className="text-center">Step 1. Factorial calculation</h1>
      <div className="d-flex gap-5">
        <FactorialCalculation />
        <FactorialCalculationWebWorker />
      </div>

    </>
  );
}

export default App;
