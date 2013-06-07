Get the names and paths of modules required in a given module:
```javascript
> var required_as = require('./lib/required-as');
undefined
> required_as('tests/fixtures/module.js');
[ { name: 'net', source: 'net' },
  { name: 'self', source: './module.js' },
  { name: 'required_as',
    source: '../../lib/required-as.js' } ]
```
from the module:
```javascript
var net = require('net');
var self = require('./module.js');
var required_as = require('../../lib/required-as.js');

var not_a_module = 3;
```
