export const fetchBenches = filters => (
  $.ajax({
    method: 'GET',
    url: 'api/benches',
    data: {bounds: filters},
    error: (err) => console.log(err)
  })
);


// const filters = {
//   "northEast" : {
//     "lat" : "39", "lng" : "-122.39208"
//   },
//   "southWest" : {
//     "lat" : "38", "lng" : "-122.47791"
//   }
// };

// const res = {bounds: filters};