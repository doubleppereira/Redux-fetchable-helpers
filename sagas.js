import { call, put, takeLatest } from "redux-saga/effects";

import * as Actions from "./actions";

function* fetch(action, apiCallFn, actionPrefix, dataOrigin) {
  try {
    const { data } = !action.urlID
      ? yield call(apiCallFn, action.params)
      : yield call(apiCallFn, action.urlID, action.params);
    yield put(
      Actions.fetchSuccess(actionPrefix, data, action.append, dataOrigin)
    );
  } catch (e) {
    yield put(Actions.fetchFailed(actionPrefix, e));
  }
}

export const createFetchableSaga = (
  actionPrefix,
  apiCallFn,
  dataOrigin = "data"
) =>
  function* saga() {
    yield takeLatest(`${actionPrefix}_FETCH`, action =>
      fetch(action, apiCallFn, actionPrefix, dataOrigin)
    );
  };
