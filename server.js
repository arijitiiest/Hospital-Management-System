const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Users = require('./routes/users');
const Patient = require('./routes/users/Patient/patient');
const Employee = require('./routes/users/Employee/employee');
const Doctor = require('./routes/users/Doctor/docter');
const Admin = require('./routes/users/Administrator/admin');
const superAdmin = require('./routes/users/Administrator/superAdmin');
const api = require('./routes/api/api');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', Users);
app.use('/patient', Patient);
app.use('/employee', Employee);
app.use('/doctor' , Doctor);
app.use('/admin', Admin);
app.use('/super', superAdmin);
app.use('/api', api);

app.use(express.static(path.join(__dirname + '/client/build')));

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));