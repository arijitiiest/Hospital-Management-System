const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const superAdmin = express.Router();

const db = require('../../../utils/db');

process.env.SECRET_KEY = 'Arijit';


superAdmin.post('/register', (req, res) => {

    const superAdminData = {
        email       : req.body.email,
        password    : req.body.password
    }

    let find = `SELECT * FROM superAdmin WHERE email = "${superAdminData.email}"`;

    db.query(find, (err1, result1) => {
        if(err1) console.log(err1);
        //console.log(result1[0]);

        if(result1[0] == undefined) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                superAdminData.password = hash;
                
                let create = `INSERT INTO superAdmin ( email, password)
                              VALUES ( "${superAdminData.email}",
                                       "${superAdminData.password}")`;

                db.query(create, (err2, result2) => {
                    if(err2) console.log(err2);
                    res.send("Created Database ooooooooooooohhhhhh");
                })
            });
        }else {
            res.send("superAdmin already exist...");
        }
    });
});

superAdmin.get('/login', (req, res) => {
    let find = `SELECT password, superAdmin_id FROM superAdmin WHERE email = "${req.body.email}"`;
    
    db.query(find, (err, result) => {
        if(err) console.log(err);
        // console.log(result);

        if(result[0] != undefined) {
            if(bcrypt.compareSync(req.body.password, result[0].password)) {
                let token = jwt.sign(result[0].superAdmin_id, process.env.SECRET_KEY);
                res.send(token);
            } else {
                res.send('Password incorrect');
            }
        } else {
            res.send("Email not found");
        }
    });
});

superAdmin.get('/profile', (req, res) => {
    let superAdmin_id = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    
    let superAdmin = `SELECT * FROM superAdmin WHERE superAdmin_id = ${superAdmin_id}`;
    db.query(superAdmin, (err, result) => {
        if (err) console.log(err);
        res.send(result);
    });
});

module.exports = superAdmin;