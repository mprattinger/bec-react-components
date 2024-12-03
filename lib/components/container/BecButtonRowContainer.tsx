import { forwardRef, ReactNode } from "react";
import { cn, ContainerPropsBase } from "../../utils";

interface BecButtonRowContainerProps extends ContainerPropsBase {
}

const BecButtonRowContainer = forwardRef<HTMLDivElement, BecButtonRowContainerProps>((props, ref) => {
    return (
        <div ref={ref} className={cn("flex justify-end mt-6 gap-4", props.className)}>
            {props.children}
        </div>
    );
});

export { BecButtonRowContainer };