import * as BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const fetchBenches = filters => dispatch => (
  BenchAPIUtil.fetchBenches(filters).then(benches => dispatch(receiveBenches(benches)))
);

const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches,
});

