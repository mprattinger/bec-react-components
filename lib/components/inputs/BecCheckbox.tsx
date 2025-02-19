import { BecInputContainer, BecLabel } from "bec-react-components";
import { cn, InputPropsBase } from "../../utils";
import { BecInputError } from "../outputs/BecInputError";

interface BecCheckboxProps extends InputPropsBase<boolean> {}

const BecCheckbox: React.FC<BecCheckboxProps> = (props) => {
  return (
    <BecInputContainer>
      {props.label && (
        <BecLabel
          id={props.id}
          label={props.label}
        />
      )}
      <input
        type="checkbox"
        id={props.id}
        checked={props.value}
        onClick={() => props.onChange(!props.value)}
        className={cn(props.className)}
      />
      {props.error && <BecInputError error={props.error} />}
    </BecInputContainer>
  );
};

export { BecCheckbox };
