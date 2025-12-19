import React, { useState } from "react";
import { validateInput } from "../utils/inputValidation.ts";
import { calculateResults } from "../utils/calcTotal.ts";
import type { InputData, InputError, ResultsData } from "../types.ts";
import { TipSplitterContext } from "./tip-calc-context.tsx";

export default function TipSplitterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
      {children}
    </TipSplitterContext.Provider>
  );
}
