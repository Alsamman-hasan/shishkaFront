/* eslint-disable jsx-a11y/label-has-associated-control */
import { Autocomplete, AutocompleteRenderInputParams } from '@mui/material';
import { memo, useState } from 'react';
import './SearchInput.scss';
import { FilmOptionType, top100Films } from './constants';
import SearchIcon from '@/shared/assets/icons/SearchIcon.svg';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
// import { useHistory } from "react-router";
// import { useAppDispatch, useAppSelector } from "../../hooks/redux";
// import { getAutocomplete } from "../../redux/products/actions";
// import {
//   changeSearchQuery, setAutocomplete, setProducts,
//   setSelectedCategories,
// } from "../../redux/products/slice";
// import useDebouncedFunction from "../../hooks/useDebouncedFunction";

// const filter = createFilterOptions<FilmOptionType>();

export const SearchInput = memo(() => {
  // const history = useHistory();
  // const dispatch = useAppDispatch();

  // const { autocomplete } = useAppSelector((state) => state.products);

  const [searchText, setSearchText] = useState('');
  const [value, setValue] = useState<FilmOptionType | null>(null);
  // const getAutocompleteWithDelay = useDebouncedFunction((value: any) => {
  //   dispatch(getAutocomplete({ searchQuery: value }));
  // }, 1500);

  // useEffect(() => {
  //   if (history.location.pathname !== "/catalog") {
  //     setSearchText("");
  //     setAutocompleteInputValue(null);
  //     dispatch(changeSearchQuery(""));
  //     dispatch(setAutocomplete([]));
  //     dispatch(setSelectedCategories([]));
  //     dispatch(setProducts([]))
  //   }
  // }, [history.location.pathname]);

  const handleSearch = (searchQuery: string) => {
    console.log(searchQuery);
    if (searchQuery.trim() === '') {
      // setSearchText("");
    } else {
      // dispatch(setSelectedCategories([]));
      // dispatch(changeSearchQuery(searchQuery.trim()));
      // history.push("/catalog");
    }
  };

  const onAutocompleteInputChange = (
    e: React.ChangeEvent<any> | any,
    valueInput: string,
    reason: string,
  ) => {
    if (reason === 'input') setSearchText(valueInput);
    // if (value.length > 3) getAutocompleteWithDelay(value);

    if (reason === 'reset') {
      // дописать логику чтобы работало при смене языков
      // history.push(`/catalog/${(autocomplete.find((option) => option.title_ru === value)?.asin)}`);
    }
  };

  // const filterOptions = useCallback(
  //   (options: FilmOptionType[], params: any) => {
  //     const filtered = filter(options, params);
  //     const { inputValue } = params;
  //     const isExisting = options.some((option) => inputValue === option.title);
  //     if (inputValue !== "" && !isExisting) {
  //       filtered.push({
  //         inputValue,
  //         title: `Serach by "${inputValue}"`,
  //       });
  //     }

  //     return filtered;
  //   },
  //   []
  // );

  return (
    <div className='search-input'>
      <Autocomplete
        options={top100Films}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string')
            setValue({
              title: newValue,
            });
          else if (newValue && newValue.inputValue)
            // Create a new value from the user input
            setValue({
              title: newValue.inputValue,
            });
          else setValue(newValue);
        }}
        // inputValue={value || ""}
        onInputChange={(e, values, reason) => {
          onAutocompleteInputChange(e, values, reason);
        }}
        // filterOptions={(options, params) => filterOptions(options, params)}
        getOptionLabel={option => {
          if (typeof option === 'string') return option;

          if (option.inputValue) return option.inputValue;

          return option.title;
        }}
        renderOption={(props, option) => (
          <Htag key={option.title} tage='h4' {...props}>
            {option.title}
          </Htag>
        )}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <div ref={params.InputProps.ref} className='input'>
            <input
              {...params.inputProps}
              id='search'
              placeholder='Найти'
              type='text'
              onKeyDown={(e: any) => {
                if (e.key === 'Enter') handleSearch(searchText);
              }}
            />
            <label
              htmlFor='search'
              style={{ position: 'absolute', right: 0 }}
              className='btnicon'
            >
              <ButtonUi
                layOut='IconOnly'
                className='seartchBtn'
                name='serachII'
                icon={<SearchIcon onClick={() => handleSearch(searchText)} />}
              >
                t
              </ButtonUi>
            </label>
          </div>
        )}
        freeSolo
        // open={true}
        value={value}
      />
    </div>
  );
});
