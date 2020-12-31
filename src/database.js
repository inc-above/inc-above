const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/above-id', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB IS CONNECT'))
    .catch(err => console.error(err));