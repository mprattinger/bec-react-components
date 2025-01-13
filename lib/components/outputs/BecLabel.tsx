interface BecLabelPRops {
  id: string;
  label: string;
}

const BecLabel = ({ id, label }: BecLabelPRops) => {
  return (
    <label
      htmlFor={id}
      className="text-xs text-becgray-500 font-bold"
    >
      {label}
    </label>
  );
};

export { BecLabel };
