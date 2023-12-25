export { ProfileDetails } from './ui/ProfileDetails/ProfileDetails';
export { ProfileTabs } from './ui/ProfileTabs/ProfileTabs';
export { getProfileError } from './model/selectors/getProfileData/getProfileData';
export type { Profile, ProfileSchema, ActiveTab } from './model/types/Profile';
export { profileActions, profileReducer } from './model/slice/profileSlice';
export { fetchProfileData } from './model/service/fetchProfileData/fetchProfileData';
export { updateProfileData } from './model/service/updateProfileData/updateProfileData';
export { getProfileData } from './model/selectors/getProfileData/getProfileData';
