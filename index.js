const express = require('express');
const User = require('./model');
const router = express.Router();
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Render the index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


router.post('/post', function(req, res, next) {
    const userdata = new User({
        EmailId: req.body.EmailId,
        UserID: req.body.UserID,
    });

    userdata.save()
        .then(result => {
            console.log(userdata, "has been saved");
            
            // res.status(201).send(result);
           
        })
        .catch(error => {
            console.error("Error saving user:", error);
            res.status(500).send(error);
        });

        res.sendFile(path.join(__dirname, 'public', 'response.html')); 
        
});

module.exports = router;
