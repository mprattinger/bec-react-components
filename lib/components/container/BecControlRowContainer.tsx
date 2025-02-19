import { cn } from "bec-react-components";
import { forwardRef, PropsWithChildren } from "react";

type BecControlRowContainerProps = PropsWithChildren & {
  className?: string;
};

export const BecControlRowContainer = forwardRef<
  HTMLDivElement,
  BecControlRowContainerProps
>((props, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex gap-x-5", props.className)}
    >
      {props.children}
    </div>
  );
});
