import { CSSProperties, InputHTMLAttributes, memo, useCallback } from 'react';
import cls from './Input.module.scss';
import { PTag } from '../../../Paragraph/P';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  label?: string | undefined | null;
  style?: CSSProperties;
  name: string;
}

export const PhoneInput = memo((props: InputProps) => {
  const {
    className,
    label,
    value,
    onChange,
    required = false,
    style,
    name,
    ...othreProps
  } = props;

  const normalizePhoneNumber = (values: string) => {
    const cardValue = values
      .replace(/\D/g, '')
      .match(/(\d{0,4})(\d{0,3})(\d{0,4})/) as string[];
    const newValue = !cardValue[2]
      ? cardValue[1]
      : `${cardValue[1]}-${cardValue[2]}${`${
          cardValue[3] ? `-${cardValue[3]}` : ''
        }`}${`${cardValue[4] ? `-${cardValue[4]}` : ''}`}`;

    return newValue;
  };

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target.value = normalizePhoneNumber(event.target.value);
      onChange?.(normalizePhoneNumber(event.target.value));
    },
    [onChange],
  );

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      <div className={cls.inputWrapper}>
        <input
          style={style}
          id={`${name}-input`}
          value={value}
          type='tel'
          required={required}
          onChange={handleChange}
          {...othreProps}
        />
      </div>
      {!!label && (
        <label htmlFor={`${name}-input`}>
          <PTag tage='P3' className={cls.Label}>
            {`${label} ${required ? '*' : ''}`}
          </PTag>
        </label>
      )}
    </div>
  );
});
