import { MenuItem, Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import './Autocomplete.scss';
import { typedMemo } from '../../../../types/TypedMemo';
import { PTag } from '../../../Paragraph/P';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AutocompleteUiProps<T extends string> {
  className?: string;
  label: string;
  value: AutocompleteUiItem<T> | null;
  onChange?: (value: AutocompleteUiItem<T> | null) => void;
  items: AutocompleteUiItem<T>[];
  placeholder?: string;
  name: string;
}

const AutocompleteInput = <T extends string>(props: AutocompleteUiProps<T>) => {
  const { label, value, className, onChange, items, placeholder, name } = props;
  const [open, setOpen] = useState(false);
  const onChangeHandler = (
    event: React.SyntheticEvent,
    valueInput: AutocompleteUiItem<T> | null,
  ) => {
    onChange?.(valueInput);
  };
  return (
    <div className={classNames('Autocomplete', {}, [className])}>
      <Autocomplete
        id='Autocomplete'
        options={items}
        open={open}
        isOptionEqualToValue={(option, values) => option.id === value?.id}
        getOptionLabel={option => (option ? option.title : '')}
        renderOption={(prop, option) => {
          if (open)
            return (
              <div key={option.id}>
                <MenuItem
                  key={option.id}
                  className='Autocomplete__menuItem'
                  {...prop}
                >
                  {option.title || ''}
                </MenuItem>
              </div>
            );

          return null;
        }}
        renderInput={params => (
          <div className={classNames('AutocompleteInputUi', {}, [className])}>
            {!!label && (
              <label htmlFor={`${name}-input`}>
                <PTag tage='P3' className='Label'>
                  {`${label}`}
                </PTag>
              </label>
            )}
            <TextField
              {...params}
              type='text'
              name={`${name}-input`}
              id={`${name}-input`}
              placeholder={placeholder}
              inputProps={{
                ...params.inputProps,
                ...params.InputProps.ref,
                autoComplete: 'number',
              }}
              onClick={() => setOpen(true)}
            />
          </div>
        )}
        onClose={() => setOpen(false)}
        onChange={onChangeHandler}
        clearOnEscape
        // freeSolo
        value={value || null}
      />
    </div>
  );
};

export const AutocompleteUi = typedMemo(AutocompleteInput);
