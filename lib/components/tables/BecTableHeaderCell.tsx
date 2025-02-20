import { PropsWithChildren } from "react";

export function BecTableHeaderCell(props: PropsWithChildren) {
  return <th className="text-left">{props.children}</th>;
}
