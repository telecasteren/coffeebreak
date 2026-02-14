interface InputRangeProps {
  id: string;
  value: number;
}

export const InputRange = ({ id, value }: InputRangeProps) => (
  <>
    <input
      id={id}
      type="range"
      disabled={true}
      min="0"
      max="100"
      value={value}
      className="slider-input"
    />
  </>
);
