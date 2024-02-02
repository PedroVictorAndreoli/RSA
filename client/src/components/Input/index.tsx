interface InputProps {
  name: string;
  className: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  hasError: boolean;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
import TextField from '@mui/material/TextField';
export function Input({
  label,
  name,
  className,
  type,
  placeholder,
  value,
  hasError,
  error,
  onChange,
}: InputProps) {
  let inputClassName = className;
  if (hasError !== undefined) {
    inputClassName += hasError ? " is-invalid" : " is-valid";
  }
  return (
    <>
      <TextField
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        label={label}
        value={value}
        variant="standard"
      />

      {hasError && <div className="invalid-feedback">{error}</div>}
    </>
  );
}