'use client';
import { useState } from 'react';
import { checkValid, checkRules } from '@/utils/validation';
interface Props {
  value: string;
  fn: (value: string) => void;
  customClass?: string;
  placeholder?: string;
  type?: string;
  rules: ValidateRule[];
}
function ValidateInput({ value, fn, rules, customClass = '', placeholder, type = 'text' }: Props) {
  const [startValid, setStartValid] = useState(false);

  return (
    <>
      <input
        type={type}
        placeholder={placeholder || ''}
        className={`validateInput ${customClass}`}
        value={value || ''}
        onChange={e => {
          fn(e.target.value);
          setStartValid(true);
        }}
        onBlur={() => setStartValid(true)}
      />
      {startValid &&
        rules
          .filter(rule => !checkValid(rule, value))
          .map((rule, i) => (
            <span
              key={i}
              className="text-red-500 text-sm"
            >
              {rule.message}
            </span>
          ))}
    </>
  );
}

export default ValidateInput;
