const express = require('express')
const app = express()
require('./mongo/db.connection')
const Employee = require('./model/Employee')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())

app.get('/employee', (req, res) => {
    Employee.find().then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
});

app.get('/employee/:id', (req, res) => {
    Employee.find({ id: req.params.id }).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
});

app.post('/employee', (req, res) => {
    const data = new Employee({
        id: req.body.id,
        name: req.body.name,
        salary: req.body.salary
    });

    data.save().then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
});

app.put('/employee/:id', (req, res) => {
    Employee.updateOne({ id: req.params.id }, {
        $set: {
            name: req.body.name,
            salary: req.body.salary
        }
    }).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
});

app.delete('/employee/:id', (req, res) => {
    Employee.deleteOne({ id: req.params.id }).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
});

app.delete('/employee', (req, res) => {
    Employee.remove().then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
});

app.listen(3000, () => {
    console.log('listen port 3000');
});