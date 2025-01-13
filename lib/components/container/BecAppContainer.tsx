import { PropsWithChildren } from "react";

type BecAppContainerProps = PropsWithChildren & {};

export const BecAppContainer = (props: BecAppContainerProps) => {
  return (
    <div className="w-[1280px] h-[800px] pt-4 pl-5 pr-5 flex flex-col">
      {props?.children}
    </div>
  );
};
