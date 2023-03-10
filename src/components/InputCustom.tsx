interface iProps {
  onChange: (event: any) => any;
  name: string;
  required?: boolean;
  value: any;
  label: string;
  disabled?: boolean;
}
export const InputCustom = ({
  name,
  required,
  value,
  label,
  disabled,
  onChange,
}: iProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
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
