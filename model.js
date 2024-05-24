const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deletion:NPYKMLRLHeK1pZ8j@cluster0.4ml1awv.mongodb.net/deletion_page', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    EmailId: String,
    UserID: String
});

module.exports = mongoose.model('User', userSchema);
