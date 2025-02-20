import { PropsWithChildren } from "react";

const BecTableHeader = (props: PropsWithChildren) => {
  return <thead className="border-b-2 border-b-black">{props.children}</thead>;
};

export default BecTableHeader;
