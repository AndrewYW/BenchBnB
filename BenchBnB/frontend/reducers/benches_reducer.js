import {
  RECEIVE_BENCHES
} from '../actions/bench_actions';
import { merge } from 'lodash';

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BENCHES:
      newState = merge({}, state);
      Object.values(action.benches).forEach(bench => {
        newState[bench.id] = bench;
      });
      return newState;
    default:
      return state;
  }
};

export default benchesReducer;