import { ApplicationError } from "bec-react-components";

interface IInputErrorProps {
  error: ApplicationError | null;
}

export const BecInputError = (props: IInputErrorProps) => {
  return (
    <div className="text-red-500 text-xs absolute top-9">
      {props.error && props.error.message}
    </div>
  );
};
