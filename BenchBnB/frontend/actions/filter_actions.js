import { fetchBenches } from '../util/bench_api_util';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const updateBounds = bounds => dispatch => (
  fetchBenches(bounds).then(benches => dispatch(updateFilter(filter)))  
);


const updateFilter = filter => ({
  type: UPDATE_BOUNDS,
  filter
});