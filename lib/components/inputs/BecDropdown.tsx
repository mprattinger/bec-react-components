import {
  BecInputContainer,
  BecLabel,
  cn,
  InputPropsBase,
  isEqual,
} from "bec-react-components";
import { useEffect, useRef, useState } from "react";

export interface BecDropdownOptions<T> {
  key: string;
  value: T;
}

interface BecDropdownProps<T> extends InputPropsBase<T> {
  options: BecDropdownOptions<T>[];
  getOptionLabel: (option: BecDropdownOptions<T>) => string;
  hasEmpty?: boolean;
}

export function BecDropdown<T>({ ...props }: BecDropdownProps<T>) {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const val = event.target.value as string; //Value is the key
    const displayValue = props.options.find((option) => option.key === val);
    setSelectedValue(displayValue?.key ?? "");

    if (selectRef.current) {
      selectRef.current.options[selectRef.current.selectedIndex].text =
        displayValue?.key ?? "";
    }

    if (displayValue) {
      props.onChange?.(displayValue.value);
    }
  };

  const handleOnFocus = () => {
    if (selectRef.current) {
      Array.from(selectRef.current.options).forEach((option) => {
        const optionItem = props.options.find((o) => o.key === option.value);
        if (optionItem) {
          option.text = props.getOptionLabel(optionItem);
        }
      });
    }
  };

  useEffect(() => {
    if (!props.options || props.options.length === 0) {
      return;
    }

    const opt = props.options.find((o) => isEqual(o.value, props.value));
    if (!opt) return;

    setSelectedValue(opt.key);
  }, [props.value]);

  return (
    <BecInputContainer className={cn(props.className)}>
      {props.label && (
        <BecLabel
          id={props.id}
          label={props.label}
        />
      )}
      <select
        id={props.id}
        ref={selectRef}
        className="bg-none outline-none text-black border-b border-b-solid border-b-becgray-200 m-0 mt-1 p-0 text-sm text-left w-full focus:font-normal focus:border-b-becblue-200 invalid:border invalid:border-red-500"
        onChange={handleOnChange}
        onClick={handleOnFocus}
        value={selectedValue}
      >
        {props.hasEmpty && props.hasEmpty === true && (
          <option value=""></option>
        )}
        {props.options &&
          props.options.map((option, index) => (
            <option
              key={index}
              value={option.key}
            >
              {props.getOptionLabel(option)}
            </option>
          ))}
      </select>
    </BecInputContainer>
  );
}
