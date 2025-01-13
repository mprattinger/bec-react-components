import { forwardRef } from "react";
import { cn, ContainerPropsBase } from "../../utils";

interface BecPanelContainerProps extends ContainerPropsBase {}

const BecPanelContainer = forwardRef<HTMLDivElement, BecPanelContainerProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-y-5 grow", props.className)}
      >
        {props.children}
      </div>
    );
  },
);

export { BecPanelContainer };
