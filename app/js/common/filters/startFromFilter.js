'use strict';

module.exports = [function() {
  return function(input, start) {
    start = +start; //parse to int
    return input.slice(start);
  };
}];
