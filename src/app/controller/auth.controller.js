const accounts = require('../models/user.models');
module.exports = {
    login: (req, res, next) => {
        accounts.findOne({
                username: req.body.username.toLowerCase(),
                password: req.body.password.toLowerCase()
            })
            .then((a) => {
                if (a) {
                    res.send('da dang nhap');
                } else {
                    res.send('dang nhap that bai');
                }
            })
            .catch(err => {
                res.send('error ');
                throw Error(err);
            })
    }
}