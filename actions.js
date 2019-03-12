export function createFetch(actionPrefix, urlID, params, append = false) {
  return {
    type: `${actionPrefix}_FETCH`,
    urlID,
    params,
    append
  };
}

export function fetchSuccess(
  actionPrefix,
  payload,
  append,
  dataOrigin = "data"
) {
  return {
    type: `${actionPrefix}_FETCH_SUCCESS`,
    data: payload[dataOrigin],
    nextPageToken: payload.nextPageToken,
    append
  };
}

export function fetchFailed(actionPrefix, err) {
  return dispatch => {
    dispatch({ type: `${actionPrefix}_FETCH_FAILED` });
  };
}
