/**
 * PostController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
function fib(i) {
    if (i <= 2)
        return 1
    else
        return fib(i - 1) + fib(i - 2);
}
module.exports = {


    /**
     * Action blueprints:
     *    `/post/index`
     *    `/post`
     */
    index: function(req, res) {
        return res.view();
    },


    /**
     * Action blueprints:
     *    `/post/slave`
     */
    slave: function(req, res) {
        console.log(req.headers['referer']);
        return res.view({
            showing: req.headers['referer'] == 'http://127.0.0.1:1337/'
        });
    },

    fib: function(req, res) {
        result = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(function(c) {
            var start_date = new Date();
            for (var i = 0; i < 10000; i++) {
                fib(c);
            }
            var end_date = new Date();
            return (end_date - start_date);
        });
        return res.view({
            time: result
        });
    },



    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to PostController)
     */
    _config: {}


};