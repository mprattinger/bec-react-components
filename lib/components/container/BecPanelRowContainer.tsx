import { forwardRef } from "react";
import { cn, ContainerPropsBase } from "../../utils";

interface BecPanelRowContainerProps extends ContainerPropsBase {

}

const BecPanelRowContainer = forwardRef<HTMLDivElement, BecPanelRowContainerProps>(
    (props, ref) => {
        return (
            <div ref={ref} className={cn("flex gap-x-5", props.className)}>
                {props.children}
            </div>
        )
    }
);

export { BecPanelRowContainer }