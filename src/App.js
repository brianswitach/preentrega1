const express = require('express');
const app = express();
const mocksRouter = require('./mocks.router');

app.use(express.json());

app.use('/api/mocks', mocksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
