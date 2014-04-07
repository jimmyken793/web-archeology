function range(start, count) {
    return Array.apply(0, Array(count)).map(function(e, i) {
        return i + start;
    });
}

function isPrime(n) {
    var i;
    var s = Math.sqrt(n);
    for (i = 2; i <= s; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function ele(tag_name, init_function) {
    var node = document.createElement(tag_name);
    init_function(node);
    return node;
}

function table_row(data, tag) {
    if (tag === undefined) {
        tag = "td";
    }
    return create_element("tr", function(tr) {
        range(0, data.length).forEach(function(i) {
            tr.appendChild(create_element(tag, function(e) {
                e.textContent = data[i]
            }));
        });
    });
}

var $ = function(s) {
    return document.querySelector(s);
};

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getAttributes(ele) {
    var ret = [];
    for (var i in ele) {
        var attr = ele[i];
        ret.push([i, attr]);
    }
    return ret;
}
var cookie = {
    set: function(key, val, option) {
        var expires;
        if (option && option['expires']) {
            expires = "expires=" + option['expires'];
        } else {
            var d = new Date();
            d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
            expires = "expires=" + d.toGMTString();
        }
        var path = '';
        if (option && option['path']) {
            path = '; path=' + option['path']
        }
        var str = escape(key) + "=" + escape(val) + "; " + expires + path;
        document.cookie = str;
    },
    get: function(key, option) {
        var name = escape(key) + "=";
        var ca = document.cookie.split('; ');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return unescape(c.substring(name.length, c.length));
        }
        return undefined;
    },
    del: function(key, option) {
        cookie.set(key, '', {
            expires: new Date(0)
        })
    },
    count: function() {
        return document.cookie == "" ? 0 : document.cookie.split(';').length;
    }
}