import { type ComponentProps, type CSSProperties, useId } from 'react';

interface DateInputProps extends ComponentProps<'input'> {
  label: string;
}

const generalStyle = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)',
};

const labelStyle: CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyle,
};

const inputStyle: CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...generalStyle,
};

export function DateInput({ label, ...props }: DateInputProps) {
  const id = useId();

  return (
    <div>
      <label style={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input style={inputStyle} id={id} type="date" {...props} />
    </div>
  );
}
