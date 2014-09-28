'use strict';


var IndexModel = require('../models/index');

var items = [];


module.exports = function(router) {

    var model = new IndexModel();


    router.get('/', function(req, res) {

        var context = {
            items: items
        };

        res.render('index', context);

    });

    router.post('/', function(req, res) {

        items.push({
            done: 0,
            text: req.param('item')
        });

        res.redirect('/');
    });

};
