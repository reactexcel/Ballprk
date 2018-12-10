import {takeLatest} from 'redux-saga/effects';
import * as constants from '../constant';
import { fetchClubDataRequest, fetchPlayerListRequest } from '../action/api';

export function* watchActions () {
  //Watch user action 
  yield takeLatest(constants.GET_CLUB_DATA_REQUEST, fetchClubDataRequest);//Get Side Data
  yield takeLatest(constants.GET_PLAYER_LIST_REQUEST, fetchPlayerListRequest);//Get player Data
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
