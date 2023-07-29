const express = require('express');
const UserSchema = require("../models/login");

const router = express.Router();

router.post('/login', (req, res) => {
    const user = UserSchema(req.body);
    user.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
});

module.exports = router;