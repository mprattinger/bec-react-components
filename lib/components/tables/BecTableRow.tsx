import { cn } from "bec-react-components";
import { PropsWithChildren } from "react";

interface BecTableRowProps extends PropsWithChildren {
  index?: number;
  isHeader: boolean;
}

export const BecTableRow = (props: BecTableRowProps) => {
  return (
    <tr
      className={cn(
        (props.index ?? 0) % 2 > 0 ? `bg-becgray-100` : ``,
        props.isHeader === false ? `hover:bg-becblue-200` : ``,
      )}
    >
      {props.children}
    </tr>
  );
};
