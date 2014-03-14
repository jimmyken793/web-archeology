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

function getAttributes(ele) {
    var ret = [];
    for (var i in ele) {
        var attr = ele[i];
        ret.push([i, attr]);
    }
    return ret;
}