import { createContext } from "react";
import type { TipSplitterContextType } from "../types.ts";

export const TipSplitterContext = createContext<TipSplitterContextType>({
  activeTip: null,
  userInput: {
    billAmount: 0,
    custom: "Custom",
    totalPersons: 0,
  },
  error: {},
  results: {
    tipPerPerson: 0,
    amountPerPerson: 0,
  },
  onCompute: () => {},
  onTipSelect: () => {},
  onInputChange: () => {},
  onReset: () => {},
});
