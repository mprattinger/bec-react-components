type BecErrorProps = {
  errorMessage: string;
  clearError?: () => void;
};

export const BecError = (props: BecErrorProps) => {
  function handleClick() {
    if (props.clearError) {
      props.clearError();
    }
  }

  return (
    <div className="text-white bg-red-500 text-sm pl-2 flex">
      <div className="grow">{props.errorMessage}</div>
      <span
        className="pr-2 cursor-pointer"
        onClick={handleClick}
      >
        X
      </span>
    </div>
  );
};
