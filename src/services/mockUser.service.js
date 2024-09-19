const bcrypt = require('bcrypt');

const generateMockUsers = (numUsers) => {
    let users = [];
    for (let i = 0; i < numUsers; i++) {
        users.push({
            username: `user${i}`,
            password: bcrypt.hashSync('coder123', 10),
            role: i % 2 === 0 ? 'user' : 'admin',
            pets: []
        });
    }
    return users;
};

module.exports = {
    generateMockUsers
};
