//Arrays are a data structure consiting of a collection of elements, each identified
//by an index.
//Create a library that you can add arrays to (without push and reverse)


function add(array, item) {
  var library = array
  library = library.concat(item)
  return library
  }

function reverse(array) {
  var reverseLibrary = []
  for (var i = array.length-1; i >= 0; i--){
    reverseLibrary = reverseLibrary.concat(array[i])
  }
  return reverseLibrary
}

module.exports = {
  add: add,
  reverse: reverse
}
