interface iProps {
  onChange: (event: any) => any;
  name: string;
  required?: boolean;
  value: any;
  label: string;
}
export const InputCustom = ({
  name,
  required,
  value,
  label,
  onChange,
}: iProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        onChange={onChange}
        className="form-control"
        id={name}
        name={name}
        required={required}
        value={value}
      ></input>
    </div>
  );
};
