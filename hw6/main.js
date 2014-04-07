var jsdom = require("jsdom");
var fs = require("fs");
var url = require('url');
var jquery = fs.readFileSync("./jquery.js", "utf-8");
var ARGV = process.argv.slice(2);
var URI_REGEX = /^([^:\/?#]+):(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/

var target = ARGV[0];
var target_host = url.parse(target)["host"];
jsdom.env({
    url: target,
    src: [jquery],
    done: function(errors, window) {
        var $ = window.$;
        $("a").each(function() {
            var href = $(this).attr("href");
            var same_domain = true;
            if (URI_REGEX.test(href)) {
                if (url.parse(href)["host"] == target_host) {
                    same_domain = true;
                } else {
                    same_domain = false;
                }
            }
            if ($(this).parents("xmp").length == 0) {
                console.log("[" + $(this).text() + "](" + href + ")(" + (same_domain ? "Same domain" : "Different domain") + ")");
            }
        });
    }
});