import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../constant';

let initialState = {
  clubData: {
    data:       {},
    isLoggedIn: false,
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  },
  playerList:{
    data:       {},
    isLoggedIn: false,
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  }
};

const getClubDataRequest = (state, action) => update(state, {
  clubData: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const getClubDataSuccess = (state, action) => update(state, {
  clubData: {
    data:       {$set: action.payload},
    isLoggedIn: {$set: true},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Login success'}
  }
});
const getClubDataError = (state, action) => update(state, {
  clubData: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});

const fetchPlayerListRequest = (state, action) => update(state, {
  playerList: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const fetchPlayerListSuccess = (state, action) => update(state, {
  playerList: {
    data:       {$set: action.payload},
    isLoggedIn: {$set: true},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Login success'}
  }
});
const fetchPlayerListError = (state, action) => update(state, {
  playerList: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});


export default handleActions({
  [constants.GET_CLUB_DATA_REQUEST]: getClubDataRequest,
  [constants.GET_CLUB_DATA_SUCCESS]: getClubDataSuccess,
  [constants.GET_CLUB_DATA_ERROR]:   getClubDataError,

  [constants.GET_PLAYER_LIST_REQUEST]: fetchPlayerListRequest,
  [constants.GET_PLAYER_LIST_SUCCESS]: fetchPlayerListSuccess,
  [constants.GET_PLAYER_LIST_ERROR]:   fetchPlayerListError,
}, initialState);
