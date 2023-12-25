/* eslint-disable ulbi-tv-plugin/layer-imports */
import { StateSchema } from '@/app/providers/StorProvider';

export const getIsAuth = (state: StateSchema) => state.authData.isAuth || false;
export const getSessionTime = (state: StateSchema) =>
  state.authData.seseionTime;
