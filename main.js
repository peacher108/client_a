require('dotenv').config();
var fs = require('fs');
require(['message'], function(create) {
    result = create();
})
fs.appendFile('/result.txt',result)

