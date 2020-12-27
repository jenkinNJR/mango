"use strict";

function f() {
  var promise, resul;
  return regeneratorRuntime.async(function f$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
              resolve('done');
            }, 3000);
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(promise);

        case 3:
          resul = _context.sent;
          console.log(resul);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

f();