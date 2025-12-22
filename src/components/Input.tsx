import React from "react";
import { useContext } from "react";
import { TipSplitterContext } from "../store/tip-calc-context.tsx";
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

export default function Input({ label }: { label: string }) {
  const { error, userInput, activeTip, onCompute, onInputChange } =
    useContext(TipSplitterContext);
  const isBill = label === "Bill";
  const name = isBill ? "billAmount" : "totalPersons";
  const errorMessage = error?.[name];

  return (
    <div className="w-full flex flex-col gap-2">
      <label
        className="w-full flex justify-between items-center text-base leading-base font-semibold justify-self-start text-grey-500"
        htmlFor={label === "Bill" ? "billAmount" : "totalPersons"}
      >
        {label}

        {errorMessage && (
          <span className="text-orange-400">{errorMessage}</span>
        )}
      </label>

      <div className="w-full h-12 flex justify-between items-center relative">
        <input
          className={`w-full h-12 px-4 py-2 text-end bg-grey-50 text-green-900 font-semibold text-lg leading-lg placeholder:text-grey-500 rounded-[.3125rem] focus:outline-2 focus:outline-green-400 focus:-outline-offset-1
              ${
                errorMessage && "outline-2 outline-orange-400 -outline-offset-1"
              }`}
          type="number"
          inputMode="numeric"
          id={name}
          name={name}
          value={
            isBill
              ? userInput.billAmount.toString()
              : userInput.totalPersons.toString()
          }
          placeholder="0"
          onChange={onInputChange}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            const inputTargetValue = Number(e.currentTarget.value);
            if (activeTip && inputTargetValue) {
              onInputChange(e);
              onCompute(activeTip);
            }
          }}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            const inputTargetValue = Number(e.currentTarget.value);

            if (activeTip && inputTargetValue) {
              onCompute(activeTip);
            }
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              const inputTargetValue = Number(e.currentTarget.value);
              if (activeTip && inputTargetValue) {
                onCompute(activeTip);
              }
            }
          }}
          required
        />
        <img
          className={`absolute left-4 ${
            label === "Bill" ? "w-[9.84px] h-[15.46px]" : "w-3.25 h-4"
          }`}
          src={label === "Bill" ? dollarIcon : personIcon}
          alt="input icons"
        />
      </div>
    </div>
  );
}
