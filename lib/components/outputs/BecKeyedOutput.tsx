import {
  BecControlPropsBase,
  BecInputContainer,
  BecLabel,
} from "bec-react-components";
import { useEffect, useState } from "react";

interface BecKeyedOutputProps extends BecControlPropsBase {
  type:
    | "Auftrag"
    | "Auftrag mit Position"
    | "Artikel"
    | "Kunde"
    | "Kunde + Addr"
    | "Lagerort"
    | "Arbeitsplatz"
    | "Kalkulationsnummer";
  divider?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
}

export const BecKeyedOutput = (props: BecKeyedOutputProps) => {
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    const parts: string[] = [];

    switch (props.type) {
      case "Auftrag": {
        parts.push(props.value1?.trim() ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value2?.padStart(3, "0") ?? "");
        break;
      }
      case "Auftrag mit Position": {
        parts.push(props.value1?.trim() ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value2?.padStart(3, "0") ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value3?.padStart(3, "0") ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value4?.padStart(3, "0") ?? "");
        break;
      }
      case "Artikel": {
        parts.push(props.value1?.trim() ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value2?.padStart(1, "0") ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value3?.padStart(3, "0") ?? "");
        break;
      }
      case "Kunde": {
        parts.push(props.value1?.trim() ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value2?.padStart(3, "0") ?? "");
        break;
      }
      case "Kunde + Addr": {
        parts.push(props.value1?.trim() ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value2?.padStart(3, "0") ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value3?.padStart(3, "0") ?? "");
        break;
      }
      case "Lagerort": {
        parts.push(props.value1?.padStart(2, "0") ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value2?.padStart(2, "0") ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value3?.padStart(2, "0") ?? "");
        break;
      }
      case "Arbeitsplatz": {
        parts.push(props.value1?.padStart(5, "0") ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value2?.padStart(3, "0") ?? "");
        break;
      }
      case "Kalkulationsnummer": {
        parts.push(props.value1?.trim() ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value2?.padStart(3, "0") ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value3?.padStart(3, "0") ?? "");
        break;
      }
      default: {
        parts.push(props.value1?.trim() ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value2?.trim() ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value3?.trim() ?? "");
        parts.push(props.divider ?? "");
        parts.push(props.value4?.trim() ?? "");
        break;
      }
    }

    setValues(parts);
  }, [
    props.value1,
    props.value2,
    props.value3,
    props.value4,
    props.divider,
    props.type,
  ]);

  return (
    <BecInputContainer>
      {props.label && (
        <BecLabel
          id={props.id}
          label={props.label}
        />
      )}
      <div className="flex gap-x-1 text-sm">
        {values.map((v, idx) => (
          <span key={`ko-${idx}`}>{v}</span>
        ))}
      </div>
    </BecInputContainer>
  );
};
