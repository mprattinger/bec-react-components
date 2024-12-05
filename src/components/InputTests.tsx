import { BecCheckbox } from "bec-react-components";
import { useState } from "react";

export const InputTests: React.FC = () => {
  const [cb1, setCb1] = useState<boolean>(true);

  return (
    <>
      <h1>Hello</h1>
      <BecCheckbox
        id="cbox1"
        label="A checkbox"
        value={cb1}
        onChange={setCb1}
      />

      <div>
        <h1>Results</h1>
        <ul>
          <li>Value from Checkbox: {cb1.toString()}</li>
        </ul>
      </div>
    </>
  );
};
