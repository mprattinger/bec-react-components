import {
  BecButton,
  BecImageButton,
  ProgramInfo,
  ProgramInfoModel,
} from "bec-react-components";
import { PrintBtnImg, ScreenshotBtnImg } from "../../contants";
import { FunctionBox, FunctionBoxItem } from "./FunctionBox";

type BecTopbarProps = {
  programName: string;
  companyLabel?: string;
  companyName?: string;
  helpText?: string;
  onHelpClicked?: () => void;
  onPrintClicked?: () => void;
  onScreenshotClicked?: () => void;
  functionLabel?: string;
  functionCodes: FunctionBoxItem[];
  functionSelected: (code: string) => void;
  info?: ProgramInfoModel;
};

const BecTopbar = ({
  companyLabel = "Firma",
  functionLabel = "Funktion",
  ...props
}: BecTopbarProps) => {
  return (
    <div className="flex w-container h-[30px] mb-1">
      <span className="font-bold text-becblue-500 text-[22px] grow">
        {props.programName}
      </span>
      {props.companyName && (
        <div className="flex h-full items-center">
          <span className="text-[14px] mr-2.5">{companyLabel}</span>
          <span className="text-becblue-500 font-bold">
            {props.companyName}
          </span>
        </div>
      )}
      <div className="flex gap-x-2.5 ml-2.5">
        {props.helpText && (
          <BecButton
            variant={"orange"}
            size={"small"}
            children={props.helpText}
            className="h-7 px-1"
            onClick={props.onHelpClicked}
          />
        )}
        <BecImageButton
          variant={"orange"}
          size={"small"}
          altText="Print"
          imgSrc={PrintBtnImg}
          onClick={props.onPrintClicked}
        />
        <BecImageButton
          variant={"orange"}
          size={"small"}
          altText="Screenshot"
          imgSrc={ScreenshotBtnImg}
          onClick={props.onScreenshotClicked}
        />
        <FunctionBox
          label={functionLabel}
          functionCodes={props.functionCodes}
          functionSelected={props.functionSelected}
        />
        <ProgramInfo info={props.info} />
      </div>
    </div>
  );
};

export { BecTopbar };
