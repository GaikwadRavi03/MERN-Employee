const mongoose = require('mongoose')
const mongoSchema = mongoose.Schema;
const employeeSchema = new mongoSchema({
    id: Number,
    name: String,
    salary: Number
});

module.exports = mongoose.model('employee', employeeSchema);