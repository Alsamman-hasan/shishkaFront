/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconButton, InputAdornment, TextField } from '@mui/material';
import {
  FC,
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  memo,
  ReactNode,
  SVGProps,
  useCallback,
  useMemo,
  useState,
} from 'react';
import EyeCloseIcone from '../../../../assets/icons/eye-hide.svg';
import EyeIcon from '../../../../assets/icons/eye-show.svg';
import { classNames } from '../../../../lib/classNames/classNames';
import './InputUi.scss';
import { PTag } from '../../../Paragraph/P';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

export interface InputUiProps extends HTMLInputProps {
  className?: string;
  value?: string | number | null;
  onChange?: (value: string) => void;
  label?: ReactNode;
  name: string;
  type?: HTMLInputTypeAttribute;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  onIconClick?: () => void;
  errorMessage?: string | undefined;
  error?: boolean;
  otherPropsinput?: any;
  placeholder?: string;
}

const Input = forwardRef((props: InputUiProps, ref: any) => {
  const {
    className,
    value,
    onChange,
    label,
    name,
    type = 'text',
    Icon,
    placeholder,
    onIconClick,
    errorMessage,
    error,
    otherPropsinput,
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const Types = useMemo(() => {
    if (type === 'password' && !showPassword) return 'password';

    if (type !== 'password') return type;

    return 'text';
  }, [showPassword, type]);

  const iconBtn = useCallback(() => {
    if (Icon)
      return (
        <IconButton key={type} onClick={onIconClick}>
          <Icon />
        </IconButton>
      );

    return null;
  }, [Icon, onIconClick, type]);

  const Icons = useCallback(() => {
    switch (type) {
      case 'password':
        return (
          <IconButton className='eyeIcons' onClick={onShowPassword}>
            {showPassword ? <EyeIcon /> : <EyeCloseIcone />}
          </IconButton>
        );
      default:
        return iconBtn();
    }
  }, [iconBtn, onShowPassword, showPassword, type]);

  return (
    <div ref={ref} className={classNames('InputUi', {}, [className])}>
      {!!label && (
        <label htmlFor={`${label}-input`}>
          <PTag tage='P3' className='Label'>
            {`${label}`}
          </PTag>
        </label>
      )}
      <TextField
        ref={ref}
        variant='outlined'
        value={value}
        id={`${label}-input`}
        type={Types}
        error={error}
        placeholder={placeholder}
        helperText={
          !!error && <span className='InputUi__error'>{errorMessage}</span>
        }
        InputProps={{
          ref,
          ...otherPropsinput,
          endAdornment: (
            <InputAdornment position='start'>
              <Icons />
            </InputAdornment>
          ),
        }}
        onChange={onChangeHandler}
      />
    </div>
  );
});

export const InputUi = memo(Input);
