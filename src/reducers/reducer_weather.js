/**
 * Created by bowenliu on 2017/5/7.
 */
import {FETCH_WEATHER} from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  return state;
}