export function PROVINCES (state, data) {
  state.provinces = data
}
export function SELECT_PROVINCE (state, data) {
  state.selectedProvince = data
}

export function SELECT_CATEGORY (state, data) {
  state.category = data
}

export function SELECT_SEARCH (state, data) {
  state.search = data
}

export function SEARCH_TYPE (state, data) {
  state.searchType = data
}
export function DIALOG_CAD (state, data) {
  state.showDialogCad = data
}
export function SKELETON_SET (state, data) {
  state.skeletonAlive = data
}
export function RESULT_DATA (state, data) {
  state.resultsData = data
}
