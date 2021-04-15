const items = require('../models/items.models');

module.exports = {
    home: function(req, res, next) {
        // items.find({ forHim: true })
        //     .then((listHim) => {
        //         listHim = listHim.map(item => item.toObject());
        //         res.render('home', { listHim: listHim });
        //     })

        Promise.all([items.find({ forHim: true }), items.find({ forHim: false })])
            .then(([listHim, listHer]) => {
                listHim = listHim.map(item => item.toObject());
                listHer = listHer.map(item => item.toObject());
                res.render('home', { listHim, listHer });
            })
            .catch((err) => { throw Error(err) })
    }
}