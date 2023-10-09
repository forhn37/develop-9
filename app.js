
// function surbur(callback) {
//   let request = {
//     insa : "hello",
//     gwail : "sagwa"
//   };
//   let response = {
//     insa : "bye",
//     gwail : "bae"
//   };
//   return callback(request, response)
// }

// surbur(function(request, response) {
//   console.log(request.gwail);
//   console.log(response.gwail);
// })


function yaho(callback) {
  
  let request = {
    insa : "hello",
    gwail : "sagwa"
  };
  let response = {
    insa : "bye",
    gwail : "bae"
  };
  callback(request, response);
}


yaho(function(request, response) {
  console.log(request.gwail);
  console.log(response.gwail);
})