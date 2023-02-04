interface iProps {
  onChange: (event: any) => any;
  name: string;
  required?: boolean;
  value: any;
  label: string;
  disabled?: boolean;
  max?: number;
  min?: number;
}
export const InputNumberCustom = ({
  name,
  required,
  value,
  label,
  disabled,
  onChange,
  max,
  min,
}: iProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        max={max}
        min={min}
        onChange={onChange}
        className="form-control my-1"
        id={name}
        name={name}
        required={required}
        value={value}
        disabled={disabled}
      ></input>
    </div>
  );
};
