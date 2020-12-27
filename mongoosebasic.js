const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('connected to db'))
    .catch(err => console.log(err));


const employeeSchema = mongoose.Schema({
    name: String,
    email: String,
    position: String,
    grade: [String],
    salary: Number,
    phone: Number
})

const Employee = new mongoose.model('employee', employeeSchema);

async function addEmp() {

    const course = new Employee({
        name: 'Jenkins',
        email: 'jenkins@raj.com',
        position: "webdev",
        grade: ['a', 'b'],
        salary: 50,
        phone: 521616329
    })
    return await course.save();

}

/* addEmp().then(
    (value) => console.log(value),
    (err) => console.log(err)
); */
Employee.find()

async function getEmp() {

    try {
        const employees = await Employee.find().limit(1);
        return employees;
    } catch (err) {
        return err;
    }
}


getEmp().then(r => console.log(r));

async function dummy() {
    let p = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("salsa");
        }, 2000);
    })


    return p;
}

dummy().then(v => console.log(v))


Employee.find((err, res) => {
    // console.log(err);
    console.log(res);
})