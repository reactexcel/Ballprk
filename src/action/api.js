import * as data from '../json/data';
import { call, put } from "redux-saga/effects";
import * as actions from "./index";


export function* fetchClubDataRequest(action) {
  try {
      yield put(actions.getClubDataSuccess(data.sideData));
  } catch (e) {
    yield put(actions.getClubDataError('Failed'));
  }
}

export function* fetchPlayerListRequest(action) {
  try {
      yield put(actions.getPlayerListSuccess(data.playerData));
  } catch (e) {
    yield put(actions.getPlayerListError('Failed'));
  }
}