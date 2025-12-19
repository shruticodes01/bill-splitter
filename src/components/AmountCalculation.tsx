import { useContext } from "react";
import { TipSplitterContext } from "../store/tip-calc-context";

export default function Amount({ title }: { title: string }) {
  const formatCurrency = (value: number | undefined) => {
    return value !== undefined ? `$${Number(value).toFixed(2)}` : "$0.00";
  };
  const { results } = useContext(TipSplitterContext);

  return (
    <div className="flex justify-between items-center">
      <p className="flex flex-col text-base leading-base text-white font-semibold">
        {title}
        <span className="text-sm leading-sm text-grey-400">/ person</span>
      </p>
      <p className="text-xl leading-xl md:text-2xl md:leading-2xl tracking-[-0.67px] text-green-400 font-bold">
        {title === "Tip Amount"
          ? formatCurrency(results.tipPerPerson)
          : formatCurrency(results.amountPerPerson)}
      </p>
    </div>
  );
}
