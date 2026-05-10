interface InputRangeProps {
  id: string;
  value: number;
  label: string;
}

export const InputRange = ({ id, value, label }: InputRangeProps) => (
  <>
    <input
      id={id}
      aria-label={label}
      type="range"
      disabled={true}
      min="0"
      max="100"
      value={value}
      className="slider-input"
    />
  </>
);
