import { BecInputContainer } from "bec-react-components";
import { cn, ValidatableInputPropsBase } from "../../utils";
import { FieldValues } from "react-hook-form";

interface BecFormInputProps<T extends FieldValues>
  extends ValidatableInputPropsBase<T> {}

const BecFormInput = <T extends FieldValues>({
  name,
  register,
  errors,
  placeHolder,
  ...props
}: BecFormInputProps<T>) => {
  return (
    <BecInputContainer>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        className={cn(
          "bg-none outline-none text-black border-b border-b-solid border-b-becgray-200 m-0 p-0 text-sm text-left w-full focus:font-normal focus:border-b-becblue-200 invalid:border invalid:border-red-500",
          errors[name] ? "border-red-500 border" : "",
        )}
        {...register(name)}
        type={props.type}
        placeholder={placeHolder}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </BecInputContainer>
  );
};

export { BecFormInput };
