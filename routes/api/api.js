const express = require('express');

const api = express.Router();

const db = require('../../utils/db');

api.get('/doctors', (req, res) => {
    const sql = "SELECT first_name, last_name, email, specialisation FROM doctors";

    db.query(sql, (err, result) => {
        if(err) console.log(err);

        res.json(result);
    });
});

api.get('/patients', (req, res) => {
    const sql = "SELECT first_name, last_name, email, address, phone_no FROM patient";

    db.query(sql, (err, result) => {
        if(err) console.log(err);

        res.json(result);
    });
});

// api.get();

module.exports = api;