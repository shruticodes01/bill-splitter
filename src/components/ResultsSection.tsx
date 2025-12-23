import { useContext } from "react";
import { TipSplitterContext } from "../store/tip-calc-context.tsx";

import Amount from "./AmountCalculation.tsx";
import Button from "./Button.tsx";

export default function CalculationResults() {
  const { resetDisabled, onReset } = useContext(TipSplitterContext);
  return (
    <section className="w-full max-md:h-64.25 md:h-75 lg:h-104.25 flex flex-col justify-between gap-8 bg-green-900 max-md:p-6 md:py-6 md:px-8 rounded-[15px]">
      <div className="flex flex-col gap-6">
        <Amount title="Tip Amount" />
        <Amount title="Total" />
      </div>
      <Button
        className={`h-12 uppercase ${
          resetDisabled && "bg-green-750 text-green-800"
        }`}
        variant="reset"
        label="Reset"
        type="reset"
        onClick={onReset}
        disabled={resetDisabled}
      />
    </section>
  );
}
