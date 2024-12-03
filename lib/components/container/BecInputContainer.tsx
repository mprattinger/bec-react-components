import { forwardRef, ReactNode } from "react";
import { cn, ContainerPropsBase } from "../../utils";

interface BecInputContainerProps extends ContainerPropsBase {
}

const BecInputContainer = forwardRef<HTMLDivElement, BecInputContainerProps>(
    (props, ref) => {
        return (
            <div ref={ref} className={cn("flex flex-col items-start", props.className)}>
                {props.children}
            </div>
        );
    }
);

export { BecInputContainer }