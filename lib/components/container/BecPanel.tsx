import { forwardRef } from "react";
import { cn, ContainerPropsBase } from "../../utils";
import { BecHeader } from "bec-react-components";

interface BecPanelProps extends ContainerPropsBase {
  header?: string;
}

const BecPanel = forwardRef<HTMLDivElement, BecPanelProps>((props, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white p-5 flex flex-col gap-y-3 w-full",
        props.className,
      )}
    >
      {props.header && <BecHeader>{props.header}</BecHeader>}
      {props.children}
    </div>
  );
});

export { BecPanel };
