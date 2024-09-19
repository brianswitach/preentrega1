const bcrypt = require('bcrypt');

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

module.exports = {
    generateMockUsers
};
