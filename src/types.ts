export type InputError = {
  billAmount?: string;
  totalPersons?: string;
};

export interface InputData {
  billAmount: string | number;
  custom?: string | number;
  totalPersons: string | number;
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
  resetDisabled: boolean;
  onCompute: (tip: number) => void;
  onTipSelect: (tip: number) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

export type InputEvent =
  | React.FocusEvent<HTMLInputElement>
  | React.KeyboardEvent<HTMLInputElement>;
