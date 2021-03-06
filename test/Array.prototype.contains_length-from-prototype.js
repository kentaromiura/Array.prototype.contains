// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains gets length property from the prototype if it's available
author: Domenic Denicola
---*/

var proto = { length: 1 };

var arrayLike = Object.create(proto);
arrayLike[0] = 'a';

Object.defineProperty(arrayLike, '1', {
    get: function () {
        $ERROR('Getter for 1 was called');
    }
});

if (Array.prototype.contains.call(arrayLike, 'a') !== true) {
    $ERROR('Expected length to be determined from the prototype');
}
