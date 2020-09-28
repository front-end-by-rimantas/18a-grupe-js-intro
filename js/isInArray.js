"use strict";

function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
}



check([66, 101], 66);
check([80, 117, 115, 104, 45, 85, 112, 115], 45);
check(['t', 'e', 's', 't'], 'e');
check(['what', 'a', 'great', 'kata'], 'kat');