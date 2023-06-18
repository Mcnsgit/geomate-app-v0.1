// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cardigamiguel221:Dropshiping22@mcnsblogtest.ngpfkjm.mongodb.net/',
{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

    // pusher.js
const Pusher = require('pusher');

const pusher = new Pusher({
    appId: 'your-app-id',
    key: 'your-key',
    secret: 'your-secret',
    cluster: 'your-cluster',
    useTLS: true
});

// Trigger an event on a channel
pusher.trigger('my-channel', 'my-event', {
    message: 'hello world'
});
