import { CSSProperties, InputHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Checkbox.module.scss';
import { classNames } from '../../lib/classNames/classNames';
import { PTag } from '../Paragraph/P';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'onChange' | 'readOnly'
>;

export interface CheckboxProps extends HTMLInputProps {
  className?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  readonly?: boolean;
  label?: string | ReactNode;
  name: string;
  style?: CSSProperties;
  errorMessage?: string;
  error?: boolean;
}

export const Checkbox = memo((props: CheckboxProps) => {
  const {
    className,
    checked,
    onChange,
    readonly,
    disabled,
    label,
    name,
    style,
    required,
    error = false,
    errorMessage,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <div className={classNames(cls.checkbox, {}, [className])}>
      <input
        readOnly={readonly}
        style={style}
        type='checkbox'
        id={name}
        disabled={disabled}
        checked={checked}
        onChange={onChangeHandler}
        {...otherProps}
        required={required}
        aria-invalid={error}
      />
      <label htmlFor={name}>
        <PTag className={cls.label} tage='P3'>
          {label}
        </PTag>
      </label>
      {!!errorMessage && (
        <PTag tage='desc' className={cls.error}>
          {errorMessage}
        </PTag>
      )}
    </div>
  );
});
