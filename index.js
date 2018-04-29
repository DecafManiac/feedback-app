const express = require('express');
require('./services/passport');

const app = express();

// setup router handlers
require('./routes/authRouters')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
