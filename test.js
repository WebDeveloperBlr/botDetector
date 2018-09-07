"use strict";
exports.__esModule = true;
var batch = [{ acceleration: 0.2624134837985052, timestamp: 3114.900000015041, type: 'MOUSE_ACCELERATION' },
    { timestamp: 3138.700000010431, type: 'MOUSE_MOVE', x: 1, y: 3 },
    { timestamp: 3138.700000010431, type: 'MOUSE_VELOCITY', velocity: 3.8145151852400474 },
    { acceleration: 0.0035885173727830005, timestamp: 3138.700000010431, type: 'MOUSE_ACCELERATION' },
    { timestamp: 3154.90000002319, type: 'MOUSE_MOVE', x: 2, y: 2 },
    { timestamp: 3154.90000002319, type: 'MOUSE_VELOCITY', velocity: 2.6550386605763694 },
    { acceleration: -0.07157262492286878, timestamp: 3154.90000002319, type: 'MOUSE_ACCELERATION' },
    { timestamp: 3162.9000000248197, type: 'MOUSE_MOVE', x: 3, y: 1 },
    { timestamp: 3162.9000000248197, type: 'MOUSE_MOVE', x: 4, y: 0 },
    { timestamp: 3162.9000000248197, type: 'MOUSE_VELOCITY', velocity: 0.8838834763031137 },
    { acceleration: -0.22139439798905297, timestamp: 3162.9000000248197, type: 'MOUSE_ACCELERATION' },
];
;
;
var isOnLine = function (pointer, fnArgs) {
    return fnArgs.A * pointer.x + fnArgs.B * pointer.y + fnArgs.C === 0;
};
var getCompareVal = function (pointer1, pointer2) {
    return Math.abs(((pointer1.x - pointer2.x) / (pointer1.y - pointer2.y)));
};
var getVars = function (pointer1, pointer2) {
    return {
        A: pointer1.y - pointer2.y,
        B: pointer2.x - pointer1.x,
        C: pointer1.x * pointer2.y - pointer2.x * pointer1.y
    };
};
var getDistance = function (firstPointer, lastPointer) {
    return Math.abs(Math.sqrt(Math.pow((lastPointer.x - firstPointer.x), 2) + Math.pow((lastPointer.x - firstPointer.x), 2)));
};
var ifOnLine = (function () {
    var arr = batch.filter(function (val) { return val.type === 'MOUSE_MOVE'; });
    console.log(arr.reduce(function (acc, el) {
        if (acc.lineElements.length > 1) {
            isOnLine(el, acc.fnArgs) ? acc.lineElements.push(el) : acc = {
                lineElements: [el]
            };
            console.log(getDistance(acc.lineElements[0], acc.lineElements[acc.lineElements.length - 1]));
            return acc;
        }
        acc.lineElements.push(el);
        acc.lineElements.length === 2 ?
            acc.fnArgs = getVars(acc.lineElements[0], acc.lineElements[1]) : null;
        return acc;
    }, {
        lineElements: []
    }));
})();
