/* eslint-disable ulbi-tv-plugin/layer-imports */
import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StorProvider';

export const getProfileForm = (state: StateSchema) => state?.profileData?.form;

export const getProfileSex = createSelector(
  (state: StateSchema) => state.profileData?.form?.sex,
  sex => {
    if (sex) {
      if (sex === 'male') return 'муж';

      if (sex === 'female') return 'жен';

      return sex;
    }
    return '';
  },
);
