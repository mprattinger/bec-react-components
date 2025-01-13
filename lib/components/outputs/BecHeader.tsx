import { ReactNode } from "react";

interface BecHeaderProps {
  children: ReactNode;
}

const BecHeader = ({ children }: BecHeaderProps) => {
  return <div className="text-xl text-becorange-500 font-bold">{children}</div>;
};

export { BecHeader };
