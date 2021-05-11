'use strict';

var msg = 'global';

function outer(a) {
  var msg = 'outer';
  console.log(msg);

  if (true) {
    var _msg = 'block';
    console.log(_msg);
  }
}