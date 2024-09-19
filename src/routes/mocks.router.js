const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const generateMockUsers = (numUsers) => {
    let users = [];
    for (let i = 0; i < numUsers; i++) {
        const user = {
            username: `user${i}`,
            password: bcrypt.hashSync('coder123', 10),
            role: i % 2 === 0 ? 'user' : 'admin',
            pets: []
        };
        users.push(user);
    }
    return users;
};

router.get('/mockingpets', (req, res) => {
    res.send('Mockingpets endpoint');
});

router.get('/mockingusers', (req, res) => {
    const users = generateMockUsers(50);
    res.json(users);
});


router.post('/generateData', (req, res) => {
    const { users, pets } = req.body;
    if (typeof users !== 'number' || typeof pets !== 'number') {
        return res.status(400).send('Invalid input, numbers expected.');
    }

    const generatedUsers = generateMockUsers(users);
   
    res.json({
        message: `${users} users and ${pets} pets generated`,
        users: generatedUsers
    });
});

module.exports = router;
