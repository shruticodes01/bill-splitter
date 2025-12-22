import { useRef, useContext } from "react";
import Button from "./Button.tsx";
import { TipSplitterContext } from "../store/tip-calc-context.tsx";

const PRESET_TIPS = [5, 10, 15, 25, 50];

export default function TipShare() {
  const customInputRef = useRef<HTMLInputElement>(null);
  const { activeTip, userInput, onInputChange, onTipSelect } =
    useContext(TipSplitterContext);
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-base leading-base text-grey-500 font-semibold">
        Select Tip %
      </label>
      <menu className="w-full flex flex-wrap justify-center gap-4">
        {PRESET_TIPS.map((tip) => {
          return (
            <li
              className="w-full max-md:max-w-36.75 md:max-lg:max-w-34.5 lg:max-w-29"
              key={tip}
            >
              <Button
                className={`w-full h-12 ${
                  tip === activeTip
                    ? "bg-grey-200 text-green-900"
                    : "bg-green-900 text-white"
                }`}
                label={`${tip}%`}
                variant={"tip"}
                onClick={() => onTipSelect(tip)}
              />
            </li>
          );
        })}

        <li className="w-full max-md:max-w-36.75 md:max-lg:max-w-34.5 lg:max-w-29">
          <label className="w-full max-w-fit" htmlFor="custom">
            <Button
              className="w-full h-12"
              label={""}
              variant="custom"
              onClick={() => {
                const currentValue = Number(customInputRef.current?.value || 0);
                if (!isNaN(currentValue) && currentValue > 0) {
                  onTipSelect(currentValue);
                }
              }}
            >
              <input
                ref={customInputRef}
                className="w-full max-w-fit h-12 text-lg leading-lg font-semibold bg-grey-50 text-green-900 text-center placeholder:text-grey-500 focus:outline-2 focus:outline-green-400 -outline-offset-2 rounded-[.3125rem]"
                type="number"
                inputMode="numeric"
                id="custom"
                name="custom"
                value={userInput.custom?.toString() ?? ""}
                placeholder="Custom"
                onChange={onInputChange}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                  const customTipValue = Number(e.currentTarget.value);
                  if (!isNaN(customTipValue) && customTipValue > 0) {
                    onTipSelect(customTipValue);
                  }
                }}
                onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  const customTipValue = Number(e.currentTarget.value);
                  if (!isNaN(customTipValue) && customTipValue > 0) {
                    onTipSelect(customTipValue);
                  }
                }}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === "Enter") {
                    const customTipValue = Number(e.currentTarget.value);
                    if (!isNaN(customTipValue) && customTipValue > 0) {
                      onTipSelect(customTipValue);
                    }
                  }
                }}
              />
            </Button>
          </label>
        </li>
      </menu>
    </div>
  );
}
