export const FETCH_INITIAL_STATE = {
  data: [],
  nextPageToken: undefined,
  loading: false
};

export const createFetchReducer = actionTypePrefix => (
  state = FETCH_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case `${actionTypePrefix}_FETCH`: {
      return {
        ...state,
        data: action.append ? state.data : [],
        loading: true
      };
    }
    case `${actionTypePrefix}_FETCH_SUCCESS`:
      return {
        ...state,
        data: action.append ? [...state.data, ...action.data] : action.data,
        nextPageToken: action.nextPageToken,
        loading: false
      };
    case `${actionTypePrefix}_FETCH_FAILED`:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
