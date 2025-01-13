import { BecInputContainer, BecLabel } from "bec-react-components";
import { InputPropsBase } from "../../utils";

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
      />
    </BecInputContainer>
  );
};

export { BecCheckbox };
