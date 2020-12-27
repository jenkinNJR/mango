"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log('connected to db'))["catch"](function (err) {
  return console.log(err);
});
var employeeSchema = mongoose.Schema({
  name: String,
  email: String,
  position: String,
  grade: [String],
  salary: Number,
  phone: Number
});
var Employee = new mongoose.model('employee', employeeSchema);

function addEmp() {
  var course;
  return regeneratorRuntime.async(function addEmp$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          course = new Employee({
            name: 'Jenkins',
            email: 'jenkins@raj.com',
            position: "webdev",
            grade: ['a', 'b'],
            salary: 50,
            phone: 521616329
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(course.save());

        case 3:
          return _context.abrupt("return", _context.sent);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}
/* addEmp().then(
    (value) => console.log(value),
    (err) => console.log(err)
); */


function getEmp() {
  var employees;
  return regeneratorRuntime.async(function getEmp$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Employee.find().limit(10).then(function (res) {
            return console.log(res);
          })["catch"](function (err) {
            return console.log(err);
          }));

        case 2:
          employees = _context2.sent;

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

console.log(getEmp());