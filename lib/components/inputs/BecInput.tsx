import { BecInputContainer } from "bec-react-components";
import { cn, InputPropsBase } from "../../utils";

interface BecInputProps<T> extends InputPropsBase<T> {}

const BecInput = <T extends unknown>({ ...props }: BecInputProps<T>) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value as unknown as T;
    props.onChange(val);
  };

  return (
    <BecInputContainer>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value as unknown as string}
        onChange={handleChange}
        className={cn(
          "bg-none outline-none text-black border-b border-b-solid border-b-becgray-200 m-0 p-0 text-sm text-left w-full focus:font-normal focus:border-b-becblue-200 invalid:border invalid:border-red-500",
        )}
      />
    </BecInputContainer>
  );
};

export { BecInput };
