import { PropsWithChildren } from "react";

export const BecFormInputError = (props: PropsWithChildren) => {
  return (
    <div className="text-red-500 text-xs absolute top-9">{props.children}</div>
  );
};
