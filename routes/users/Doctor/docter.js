const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const doctor = express.Router();

const db = require('../../../utils/db');

process.env.SECRET_KEY = 'Arijit';

doctor.post('/register', (req, res) => {

    const doctorData = {
        first_name      : req.body.first_name,
        last_name       : req.body.last_name,
        address         : req.body.address,
        email           : req.body.email,
        salary          : req.body.salary,
        specialisation  : req.body.specialisation,
        shift_time      : req.body.shift_time,
        password        : req.body.password
    }

    let find = `SELECT * FROM doctors WHERE email = "${doctorData.email}"`;

    db.query(find, (err1, result1) => {
        if(err1) console.log(err1);
        console.log(result1[0]);

        if(result1[0] == undefined) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                doctorData.password = hash;
                
                let create = `INSERT INTO doctors (first_name, last_name, address, email, salary, specialisation, shift_time, password)
                              VALUES ( "${doctorData.first_name}", 
                                       "${doctorData.last_name}", 
                                       "${doctorData.address}", 
                                       "${doctorData.email}",
                                       "${doctorData.salary}",
                                       "${doctorData.specialisation}",
                                       "${doctorData.shift_time}",
                                       "${doctorData.password}")`;

                db.query(create, (err2, result2) => {
                    if(err2) console.log(err2);
                    res.send("Created Database ooooooooooooohhhhhh");
                })
            });
        }else {
            res.send("doctor already exist...");
        }
    });
});

doctor.post('/login', (req, res) => {
    let find = `SELECT password, doctor_id FROM doctors WHERE email = "${req.body.email}"`;
    
    db.query(find, (err, result) => {
        if(err) console.log(err);
        console.log(result);

        if(result[0] != undefined) {
            if(bcrypt.compareSync(req.body.password, result[0].password)) {
                let token = jwt.sign(result[0].doctor_id, process.env.SECRET_KEY);
                res.send(token);
            } else {
                res.send('Password incorrect');
            }
        } else {
            res.send("Email not found");
        }
    });
});

doctor.get('/patient', (req,res) => {
    let doctor_id = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    
    const sql = `SELECT 
                    p.patient_id,
                    p.first_name,
                    p.last_name
                FROM assign_doctor ad
                    JOIN patient p ON p.patient_id = ad.patient_id
                    JOIN doctors d ON d.doctor_id = ad.doctor_id
                WHERE ad.doctor_id = ${doctor_id}

                `
    console.log(sql);
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        res.send(result);

    });
})

doctor.get('/profile', (req, res) => {
    let doctor_id = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    
    let user = `SELECT * FROM doctors WHERE doctor_id = ${doctor_id}`;
    db.query(user, (err, result) => {
        if (err) console.log(err);
        res.send(result);

    });
});

doctor.post('/delete', (req, res) => {
    const find = `SELECT * FROM doctors WHERE doctor_id = ${req.body.doctor_id}`;
    let del =  `DELETE FROM doctors WHERE doctor_id = ${req.body.doctor_id}`

    db.query(find, (err1, result1) => {
        if(err1) console.log(err1);

        if(result1[0] != undefined) {
            db.query(del, (err2, result2) => {
                res.send('DELETED');
            })
        }
    })
});

doctor.post('/update_sal', (req, res) => {
    const find = `SELECT * FROM doctors WHERE doctor_id = ${req.body.doctor_id}`;
    const upd = `UPDATE doctors 
                    SET salary =" ${req.body.salary}"
                    WHERE doctor_id = ${req.body.doctor_id}`;

    db.query(find, (err1, result1) => {
        if(err1) console.log(err1);

        if(result1[0] != undefined) {
            db.query(upd, (err2, result2) => {
                res.send('UPDATED');
            })
        }
    })
})

module.exports = doctor;