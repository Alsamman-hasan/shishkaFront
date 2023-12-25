import {
  CSSProperties,
  InputHTMLAttributes,
  memo,
  useMemo,
  useState,
} from 'react';
import cls from './Input.module.scss';

import EyeHide from '../../../../assets/icons/eye-hide.svg';
import EyeShow from '../../../../assets/icons/eye-show.svg';
import { classNames } from '../../../../lib/classNames/classNames';
import { PTag } from '../../../../ui/Paragraph/P';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  label?: string | undefined | null;
  errorMessage?: string;
  style?: CSSProperties;
  name: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    label,
    value,
    onChange,
    type = 'text',
    required = false,
    errorMessage,
    style,
    name,
    ...othreProps
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const onShowPasspord = () => {
    setShowPassword(prev => !prev);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const Types = useMemo(() => {
    if (type === 'password' && showPassword) return 'text';

    return type;
  }, [showPassword, type]);

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      <div className={cls.inputWrapper}>
        <input
          style={style}
          id={`${name}inputUI`}
          value={value}
          type={Types}
          name={`${name}inputUI`}
          required={required}
          aria-invalid={!!focused && Boolean(errorMessage)}
          onChange={onChangeHandler}
          onBlur={handleFocus}
          onFocus={() => setFocused(true)}
          {...othreProps}
        />
        {type === 'password' && (
          <div className={cls.icon} onClick={onShowPasspord}>
            {showPassword ? <EyeShow /> : <EyeHide />}
          </div>
        )}
        {!!errorMessage && (
          <PTag tage='desc' className={cls.error}>
            {errorMessage}
          </PTag>
        )}
      </div>
      {!!label && (
        <label htmlFor={`${name}inputUI`}>
          <PTag tage='P3' className={cls.Label}>
            {`${label} ${required ? '*' : ''}`}
          </PTag>
        </label>
      )}
    </div>
  );
});
