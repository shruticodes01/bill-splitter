export type InputError = {
  billAmount?: string;
  totalPersons?: string;
};

export interface InputData {
  billAmount: number;
  custom?: string | number;
  totalPersons: number;
}

export interface ResultsData {
  tipPerPerson: number;
  amountPerPerson: number;
}

export interface TipSplitterContextType {
  activeTip: number | null;
  userInput: InputData;
  error: InputError;
  results: ResultsData;
  onCompute: (tip: number) => void;
  onTipSelect: (tip: number) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}
