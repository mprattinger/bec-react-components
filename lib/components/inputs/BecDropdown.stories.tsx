import { BecInputContainer } from "bec-react-components";
import { InputPropsBase } from "../../utils";

interface IDropdownOptions<T> {
  label?: string;
  value: T;
}

interface BecDropdownProps<T> extends InputPropsBase<T> {
  emptyEntry?: string;
  options: IDropdownOptions<T>;
}

const BecDropdown = <T extends unknown>({ ...props }: BecDropdownProps<T>) => {
  return (
    <BecInputContainer>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <select>{props.emptyEntry && <option>{props.emptyEntry}</option>}</select>
    </BecInputContainer>
  );
};

export { BecDropdown };
