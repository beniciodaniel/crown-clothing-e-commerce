import { createSelector } from 'reselect';

const selectDirectory = state => state.directory; //from root reducer

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)