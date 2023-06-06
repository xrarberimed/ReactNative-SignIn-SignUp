import axios from 'axios';
import {API_BASE_URL} from '../../config/urls';

export async function DoLoginAsync(loginForm) {
  return await axios.post(API_BASE_URL + '/auth', loginForm);
}
