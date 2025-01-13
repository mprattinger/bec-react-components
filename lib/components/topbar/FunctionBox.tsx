import { Magnifier } from "bec-react-components";
import { useState } from "react";

export type FunctionBoxItem = {
  code: string;
  description: string;
};

type FunctionBoxProps = {
  label?: string;
  functionCodes: FunctionBoxItem[];
  functionSelected: (code: string) => void;
};

const FunctionBox = (props: FunctionBoxProps) => {
  const [currentCode, setCurrentCode] = useState("");
  const [showList, setShowList] = useState(false);

  const keyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      functionSelected(currentCode.toUpperCase());
      setCurrentCode("");
      return;
    }
  };

  const functionSelected = (code: string) => {
    if (props.functionCodes.some((f) => f.code === code)) {
      props.functionSelected(code);
    } else {
      props.functionSelected("FNCT_NOT_VALID");
    }
  };

  return (
    <div className="mr-2.5 mt-1 flex flex-col ml-2.5 relative">
      <div className="flex">
        {props.label && (
          <label className="text-[14px] mr-2.5 text-becgray-500 pt-[2px]">
            {props.label}
          </label>
        )}
        <input
          type="text"
          className="w-14 h-4 border-b border-b-becgray-200 m-0 p-0 text-[14px] mt-1 mr-1 uppercase bg-transparent"
          maxLength={4}
          onKeyUp={keyUpHandler}
          value={currentCode}
          onChange={(e) => setCurrentCode(e.currentTarget.value)}
        />
        <img
          src={Magnifier}
          alt="Funktionscodes suchen"
          className="w-4 h-4 cursor-pointer"
          onClick={() => setShowList(!showList)}
        />
      </div>
      {showList && (
        <div>
          {props.functionCodes.map((item) => (
            <div>
              <span>{item.code}</span>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { FunctionBox };
