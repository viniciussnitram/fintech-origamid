import { useState } from 'react';

import { DateInput } from '@/components/ui/DateInput';

export function DateRange() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  return (
    <form
      className="box flex"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <DateInput
        label="Início"
        name="start"
        value={start}
        onChange={({ target }) => {
          setStart(target.value);
        }}
      />

      <DateInput
        label="Final"
        name="end"
        value={end}
        onChange={({ target }) => {
          setEnd(target.value);
        }}
      />
    </form>
  );
}
