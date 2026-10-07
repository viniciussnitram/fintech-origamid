import { type ComponentProps, useId } from 'react';

interface DateInputProps extends ComponentProps<'input'> {
  label: string;
}

export function DateInput({ label, ...props }: DateInputProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="date" {...props} />
    </div>
  );
}
