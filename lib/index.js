"use strict";
var ejs = require("ejs");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    var render = ejs.compile(content, {});
    var data = null;
    if (attrs.data) {
        data = scope.execImport(attrs.data, true);
    }
    return render(data);
});
