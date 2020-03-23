const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const admin = express.Router();

const db = require('../../../utils/db');

process.env.SECRET_KEY = 'Arijit';

admin.post('/register', (req, res) => {

    const adminData = {
        first_name  : req.body.first_name,
        last_name   : req.body.last_name,
        email       : req.body.email,
        phone_no    : req.body.phone_no,
        designation : req.body.designation,
        password    : req.body.password,
        address     : req.body.address,
        salary      : req.body.salary
    }

    console.log(adminData)

    let find = `SELECT * FROM admin WHERE email = "${adminData.email}"`;

    db.query(find, (err1, result1) => {
        if(err1) console.log(err1);
        console.log(result1[0]);

        if(result1[0] == undefined) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
             adminData.password = hash;
                
                let create = `INSERT INTO admin (first_name, last_name, email, phone_no, designation, password, salary, address)
                              VALUES ( "${adminData.first_name}", 
                                       "${adminData.last_name}", 
                                       "${adminData.email}",
                                       "${adminData.phone_no}",
                                       "${adminData.designation}",
                                       "${adminData.password}",
                                       ${adminData.salary},
                                       "${adminData.address}"
                                       )`;

                db.query(create, (err2, result2) => {
                    if(err2) console.log(err2);
                    res.send("Created Database ooooooooooooohhhhhh");
                })
            });
        }else {
            res.send("admin already exist...");
        }
    });
});

admin.post('/login', (req, res) => {
    let find = `SELECT password, admin_id FROM admin WHERE email = "${req.body.email}"`;
    
    db.query(find, (err, result) => {
        if(err) console.log(err);
        // console.log(result);

        if(result[0] != undefined) {
            if(bcrypt.compareSync(req.body.password, result[0].password)) {
                let token = jwt.sign(result[0].admin_id, process.env.SECRET_KEY);
                res.send(token);
            } else {
                res.send('Password incorrect');
            }
        } else {
            res.send("Email not found");
        }
    });
});

admin.get('/details', (req, res) => {
    let user_id = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    
    let user = `SELECT * FROM admin WHERE admin_id = ${user_id}`;
    db.query(user, (err, result) => {
        if (err) console.log(err);
        res.send(result);
    });
});

admin.post('/delete', (req, res) => {
    const find = `SELECT * FROM admin WHERE admin_id = ${req.body.admin_id}`;
    let del =  `DELETE FROM admin WHERE admin_id = ${req.body.admin_id}`

    db.query(find, (err1, result1) => {
        if(err1) console.log(err1);

        if(result1[0] != undefined) {
            db.query(del, (err2, result2) => {
                res.send('DELETED');
            })
        }
    })
})

admin.post('/assign_doctor', (req, res) => {
    const data = {
        patient_id: req.body.patient_id,
        doctor_id: req.body.doctor_id
    };

    const sql = `SELECT * FROM assign_doctor WHERE patient_id = "${data.patient_id}"`;

    db.query(sql, (err1, result1) => {
        if(err1) console.log(err1);

        if(result1[0] == undefined) {
            const create = `INSERT INTO assign_doctor (patient_id, doctor_id) 
                            VALUES ( "${data.patient_id}",
                                     "${data.doctor_id}"
                            )`
            db.query(create, (err2, result2) =>{
                if(err2) console.log(err2);
                res.send("Yes   ")
            })
        }else {
            res.send("already exist...");
        }
    })
});

admin.post('/bill', (req, res) => {
    const data = {
        patient_email: req.body.patient_email,
        medicine_cost: req.body.medicine_cost,
        room_charge: req.body.room_charge,
        misc_charge: req.body.misc_charge,
        operation_charge: req.body.operation_charge,
    }

    const sql = `SELECT * FROM patient WHERE email = "${data.patient_email}"`;


    db.query(sql, (err1, result1) => {
        if(err1) console.log(err1);


        if(result1[0] !== undefined) {

            const update = `
                            UPDATE bill
                            SET
                                medicine_cost = medicine_cost + ${data.medicine_cost},
                                operation_charge = operation_charge + ${data.operation_charge},
                                room_charge = room_charge + ${data.room_charge},
                                misc_charge = misc_charge + ${data.misc_charge}
                            WHERE patient_id = ${result1[0].patient_id}
                            `
            console.log(update);

            db.query(update, (err2, result2) =>{
                if(err2) console.log(err2);
                res.send("Yes   ")
            })
        }else {
            res.send("already exist...");
        }
    })
});


module.exports = admin;