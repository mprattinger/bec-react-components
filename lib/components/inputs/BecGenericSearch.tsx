import { ReactNode, useEffect, useRef, useState } from "react";
import {
  ApplicationError,
  BecInputContainer,
  BecLabel,
  cn,
  IData,
} from "bec-react-components";
import { BecInputError } from "../outputs/BecInputError";

export interface IGenericSearchProps<T extends IData, U> {
  id: string;
  label?: string;
  mandant: number;
  searchData: (
    mandant: number,
    searchText: string,
  ) => Promise<T[] | ApplicationError>;
  clearCache?: () => void;
  searchTermMinLength?: number;
  dropdownWidth?: string;
  value: U;
  onValueChanged: (value: T) => void;
  displayValue: string;
  children: (data: T, idx: number) => ReactNode;
  listClassName?: string;
}

export function BecGenericSearch<T extends IData, U>(
  props: IGenericSearchProps<T, U>,
) {
  const [data, setData] = useState<T[]>([]);
  const [value, setValue] = useState<string>(props.displayValue);
  const [activeId, setActiveId] = useState(0);
  const [error, setError] = useState<ApplicationError | null>(null);

  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (activeId >= 0 && data.length > 0) {
        populatedValue(data[activeId]);
        clearData();
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

  const handleKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    setError(null);

    const currentText = (e.target as HTMLInputElement).value;
    if (
      props.searchTermMinLength &&
      currentText.length < props.searchTermMinLength
    ) {
      clearData();
      return;
    }

    if (currentText === "") {
      clearData();
      return;
    }

    switch (e.key) {
      case "Enter":
        return;
      case "ArrowUp":
        setActiveId((prev) => (prev === 0 ? 0 : prev - 1));
        return;
      case "ArrowDown":
        setActiveId((prev) => (prev < data.length - 1 ? prev + 1 : prev));
        return;
      case "Escape":
        clearData();
        return;
      case "Tab":
        return;
    }

    const searchResult = await props.searchData(props.mandant, currentText);
    if (searchResult instanceof ApplicationError) {
      setError(searchResult);
      return;
    }
    setData(searchResult);
  };

  const clearData = () => {
    setData([]);
    setActiveId(0);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    props.clearCache && props.clearCache();
  };

  const populatedValue = (value: T) => {
    props.onValueChanged(value);
  };

  useEffect(() => {
    if (listRef === null) {
      return;
    }

    const item = listRef.current?.querySelector(`#res-${activeId}`);
    item?.scrollIntoView(false);
  }, [activeId]);

  const possibleOutsideClick = (e: MouseEvent) => {
    if (!containerRef) return;

    if (
      !(
        containerRef.current === e.target ||
        containerRef.current?.contains(e.target as Node)
      )
    ) {
      clearData();
    }
  };

  useEffect(() => {
    document.addEventListener("click", possibleOutsideClick);

    return () => {
      document.removeEventListener("click", possibleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setValue(props.displayValue);
  }, [props.displayValue]);

  return (
    <BecInputContainer>
      <div
        className="relative w-full flex flex-col"
        ref={containerRef}
      >
        {props.label && (
          <BecLabel
            id={props.id}
            label={props.label}
          />
        )}
        <input
          id={props.id}
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={(e) => e.target.select()}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onBlur={() => setData([])}
          className={cn(
            "bg-none outline-none text-black border-b border-b-solid m-0 p-0 text-sm text-left w-full focus:font-normal  invalid:border invalid:border-red-500",
            error === null
              ? "border-b-becgray-200 focus:border-b-becblue-200"
              : "border-b-red-500 focus:border-b-red-500",
          )}
        />
        <ul
          ref={listRef}
          className={cn(
            "max-h-40 overflow-y-auto border border-becgray-500 absolute top-[calc(100%+0.25rem)] left-0 rounded p-2 bg-white z-100",
            data.length > 0 ? "block" : "hidden",
            props.dropdownWidth ? props.dropdownWidth : "w-96",
            props.listClassName ?? "",
          )}
        >
          {data.map((d, idx) => (
            <li
              key={idx}
              id={`res-${idx}`}
              className={`cursor-pointer hover:bg-becblue-200 ${
                idx === activeId ? "bg-becblue-200" : ""
              }`}
              onClick={(e) => {
                populatedValue(d);
                e.stopPropagation();
              }}
            >
              {props.children(d, idx)}
            </li>
          ))}
        </ul>
      </div>
      {error && <BecInputError error={error} />}
    </BecInputContainer>
  );
}
