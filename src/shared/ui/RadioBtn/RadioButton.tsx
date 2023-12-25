import { InputHTMLAttributes, ReactNode, memo } from 'react';
import cls from './RadioButton.module.scss';
import { PTag } from '../Paragraph/P';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'onChange' | 'readOnly'
>;
export interface RadioButtonProps extends HTMLInputProps {
  className?: string;
  name?: string;
  id: string;
  value?: string;
  onChange?: () => void;
  checked?: boolean;
  text?: string;
  label?: string | ReactNode;
}
export const RadioButton = memo((props: RadioButtonProps) => {
  const {
    className,
    checked,
    id,
    name,
    onChange,
    text,
    value,
    label,
    ...otherProps
  } = props;
  return (
    <div className={classNames(cls.RadioButton, {}, [className])}>
      <label htmlFor={id} className={cls.radioLabel}>
        <input
          className={cls.radioInput}
          type='radio'
          name={name}
          id={id}
          // value={value}
          checked={checked}
          onChange={onChange}
          {...otherProps}
        />
        <span className={cls.customRadio} />
        {!!label && <PTag tage='P2'> {label}</PTag>}
      </label>
    </div>
  );
});
