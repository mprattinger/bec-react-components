import { BecInputContainer } from "bec-react-components";
import { InputPropsBase } from "../../utils";

interface BecCheckboxProps extends InputPropsBase<boolean> {}

const BecCheckbox: React.FC<BecCheckboxProps> = (props) => {
  return (
    <BecInputContainer>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
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
