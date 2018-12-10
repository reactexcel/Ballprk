import {createAction} from 'redux-actions';
import * as constants from '../constant';

export const getClubDataRequest = createAction(constants.GET_CLUB_DATA_REQUEST);
export const getClubDataSuccess = createAction(constants.GET_CLUB_DATA_SUCCESS);
export const getClubDataError = createAction(constants.GET_CLUB_DATA_ERROR);

export const getPlayerListRequest = createAction(constants.GET_PLAYER_LIST_REQUEST);
export const getPlayerListSuccess = createAction(constants.GET_PLAYER_LIST_SUCCESS);
export const getPlayerListError = createAction(constants.GET_PLAYER_LIST_ERROR);