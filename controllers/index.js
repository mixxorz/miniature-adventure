'use strict';


var IndexModel = require('../models/index');


module.exports = function(router) {

    var model = new IndexModel();


    router.get('/', function(req, res) {

        var context = {
            firstName: 'Amanda',
            lastName: 'Lim'
        };

        res.render('index', context);

    });

};
