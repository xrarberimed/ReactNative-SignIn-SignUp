import {LOGIN, SIGNUP} from '../../config/urls';
import {apiPost, clearUserData, setUserData} from '../../utils/utils';
import store from '../store';
import types from '../types';

const {dispatch} = store;

export function login(data) {
  return new Promise((reject) => {
    return apiPost(LOGIN, data)
      .then(res => {
        console.log(res);
        setUserData(res.data);
        console.log("store",store)
      })
      .catch(error => {
        reject(error);
      });
  });
}


export function logout() {
  dispatch({type: types.CLEAR_REDUX_STATE});
  clearUserData();
}
