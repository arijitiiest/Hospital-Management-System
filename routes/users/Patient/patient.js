const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const patient = express.Router();

const db = require('../../../utils/db');

process.env.SECRET_KEY = 'Arijit';

patient.post('/register', (req, res) => {

    const patientData = {
        first_name  : req.body.first_name,
        last_name   : req.body.last_name,
        address     : req.body.address,
        email       : req.body.email,
        phone_no    : req.body.phone_no,
        password    : req.body.password,
        disease     : req.body.disease
    }

    let find = `SELECT * FROM patient WHERE email = "${patientData.email}"`;

    db.query(find, (err1, result1) => {
        if(err1) console.log(err1);
        //console.log(result1[0]);

        if(result1[0] == undefined) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                patientData.password = hash;
                
                let create = `INSERT INTO patient (first_name, last_name, address, email, phone_no, password, disease)
                              VALUES ( "${patientData.first_name}", 
                                       "${patientData.last_name}", 
                                       "${patientData.address}",
                                       "${patientData.email}",
                                       "${patientData.phone_no}",
                                       "${patientData.password}",
                                       "${patientData.disease}")`;

                db.query(create, (err2, result2) => {

                    db.query(find, (err3, result3)=> {
                        const patient_id = result3[0].patient_id;

                        let bill = `INSERT INTO bill (patient_id) VALUES ("${patient_id}")`;

                        db.query(bill, (err4, result4)=>{
                            console.log("OK");
                        })
                    })


                    if(err2) console.log(err2);
                    res.send("Created Database ooooooooooooohhhhhh");
                })
            });
        }else {
            res.send("user already exist...");
        }
    });
});

patient.post('/login', (req, res) => {
    let find = `SELECT password, patient_id FROM patient WHERE email = "${req.body.email}"`;
    
    db.query(find, (err, result) => {
        if(err) console.log(err);
        // console.log(result);

        if(result[0] != undefined) {
            if(bcrypt.compareSync(req.body.password, result[0].password)) {
                let token = jwt.sign(result[0].patient_id, process.env.SECRET_KEY);
                res.send(token);
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        } else {
            res.send("Email not found");
        }
    });
});

patient.get('/profile', (req, res) => {
    let patient_id = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    
    let patient = `SELECT * FROM patient WHERE patient_id = ${patient_id}`;
    db.query(patient, (err, result) => {
        if (err) console.log(err);
        res.send(result);
    });
});


patient.get('/details', (req, res) => {
    let patient_id = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

    let patient =  `SELECT 
                        *                        
                    FROM patient
                    WHERE patient_id = ${patient_id}`;
    db.query(patient, (err, result) => {
        if (err) console.log(err);
        // console.log(patient_id, result);
        res.send(result);
    });
});

patient.get('/doctor', (req, res) => {
    let patient_id = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

    let patient =  `SELECT 
                        d.first_name as doctor_firstname,
                        d.last_name doctor_lastname,
                        d.specialisation 
                    FROM assign_doctor ad
                    JOIN patient p
                        ON p.patient_id = ad.patient_id
                    JOIN doctors d
                        ON ad.doctor_id = d.doctor_id
                    WHERE p.patient_id = ${patient_id}`;
    db.query(patient, (err, result) => {
        if (err) console.log(err);
        // console.log(patient_id, result);
        res.send(result);
    });
})

patient.get('/bill', (req, res) => {
    let patient_id = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

    const bill = `SELECT * FROM bill WHERE patient_id = ${patient_id}`;

    db.query(bill, (err, result) => {
        res.send(result);
    })
})


module.exports = patient;