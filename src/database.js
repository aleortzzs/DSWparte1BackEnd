const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/wave',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(db => console.log('Ya esta conectado :)))))'))
.catch((err) => console.error(err));

