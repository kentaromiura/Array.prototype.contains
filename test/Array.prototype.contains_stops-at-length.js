// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains stops once it hits the length of an array-like, even if there are more after
author: Domenic Denicola
---*/

var arrayLike = {
    length: 2,
    0: 'a',
    1: 'b',
    get 2() {
        $ERROR('Should not try to get the second element');
    }
};

if (Array.prototype.contains.call(arrayLike, 'c') !== false) {
    $ERROR('Expected array-like to not contain "c"');
}
