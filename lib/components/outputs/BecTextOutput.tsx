import {
  BecControlPropsBase,
  BecInputContainer,
  BecLabel,
} from "bec-react-components";

interface BecTextOutputProps extends BecControlPropsBase {
  value: string;
}

export const BecTextOutput = (props: BecTextOutputProps) => {
  return (
    <BecInputContainer>
      {props.label && (
        <BecLabel
          id={props.id}
          label={props.label}
        />
      )}
      <div className="text-sm">{props.value}</div>
    </BecInputContainer>
  );
};
