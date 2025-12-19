import React, { useState } from "react";

import "./App.css";
import { TipSplitterContext } from "./store/tip-calc-context.tsx";
import Container from "./components/Container.tsx";
import Header from "./components/Header.tsx";
import CalculationResults from "./components/ResultsSection.tsx";
import BillSection from "./components/BillSection.tsx";
import { calculateResults } from "./utils/calcTotal.ts";
import { validateInput } from "./utils/inputValidation.ts";
import type { InputData, ResultsData, InputError } from "./types.ts";

function App() {
  const [activeTip, setActiveTip] = useState<number | null>(null);
  const [userInput, setUserInput] = useState<InputData>({
    billAmount: 0,
    custom: "Custom",
    totalPersons: 0,
  });

  const [error, setError] = useState<InputError>({});

  const [results, setResults] = useState<ResultsData>({
    tipPerPerson: 0,
    amountPerPerson: 0,
  });

  function computeResults(tip: number) {
    const inputError = validateInput(userInput);
    if (tip && Object.keys(inputError).length === 0) {
      const inputResults = calculateResults(
        tip,
        userInput.billAmount,
        userInput.totalPersons
      );
      console.log("inputResults:", inputResults);
      setError({});
      setResults(() => inputResults);
    } else {
      setError(inputError);
      setResults({
        tipPerPerson: 0,
        amountPerPerson: 0,
      });
      return;
    }
  }

  function handleTipSelect(tip: number) {
    setActiveTip(tip);
    computeResults(tip);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [name]: +value,
      };
    });

    if (activeTip) {
      computeResults(activeTip as number);
    }
  }

  console.log(userInput.totalPersons);

  function handleReset() {
    setUserInput({
      billAmount: 0,
      custom: "Custom",
      totalPersons: 0,
    });

    setResults({
      tipPerPerson: 0,
      amountPerPerson: 0,
    });
  }

  const ctxValue = {
    activeTip: activeTip,
    userInput: userInput,
    error: error,
    results: results,
    onCompute: computeResults,
    onTipSelect: handleTipSelect,
    onInputChange: handleInputChange,
    onReset: handleReset,
  };

  return (
    <TipSplitterContext.Provider value={ctxValue}>
      <Container className="flex flex-col">
        <Header />
        <main className="w-full flex max-lg:flex-col items-center max-md:gap-8 md:max-lg:gap-10 lg:gap-12 bg-white py-8 px-6 md:max-lg:px-20 md:max-lg:py-12 lg:p-8 max-md:rounded-tl-xl max-md:rounded-tr-xl md:rounded-[1.5625rem]">
          <BillSection />
          <CalculationResults />
        </main>
      </Container>
    </TipSplitterContext.Provider>
  );
}

export default App;
