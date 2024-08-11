"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = exports.randSleep = exports.timeoutPromise = exports.sleep = void 0;
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
exports.sleep = sleep;
function timeoutPromise(timeout) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject("Timeout");
        }, timeout);
    });
}
exports.timeoutPromise = timeoutPromise;
async function randSleep(max = 1000, min = 100) {
    let ms = Math.round(Math.random() * (max - min) + min);
    return await sleep(ms);
}
exports.randSleep = randSleep;
var time;
(function (time_1) {
    function add(time, date = new Date()) {
        var _a, _b, _c, _d;
        let copy = new Date(date);
        return new Date(copy.setTime(copy.getTime() +
            ((_a = time.hour) !== null && _a !== void 0 ? _a : 0) * 3600000 +
            ((_b = time.minutes) !== null && _b !== void 0 ? _b : 0) * 6000 +
            ((_c = time.seconds) !== null && _c !== void 0 ? _c : 0) * 1000) +
            ((_d = time.milliseconds) !== null && _d !== void 0 ? _d : 0));
    }
    time_1.add = add;
    function toDate(date) {
        if (date === void 0) {
            return new Date(0);
        }
        if (isDate(date)) {
            return date;
        }
        else {
            return new Date(parseFloat(date.toString()));
        }
    }
    time_1.toDate = toDate;
    function isDate(date) {
        return (date instanceof Date);
    }
    time_1.isDate = isDate;
    function format(date, format) {
        var d = toDate(date);
        return format
            .replace(/Y/gm, d.getFullYear().toString())
            .replace(/m/gm, ('0' + (d.getMonth() + 1)).substr(-2))
            .replace(/d/gm, ('0' + (d.getDate() + 1)).substr(-2))
            .replace(/H/gm, ('0' + (d.getHours() + 0)).substr(-2))
            .replace(/i/gm, ('0' + (d.getMinutes() + 0)).substr(-2))
            .replace(/s/gm, ('0' + (d.getSeconds() + 0)).substr(-2))
            .replace(/v/gm, ('0000' + (d.getMilliseconds() % 1000)).substr(-3));
    }
    time_1.format = format;
    function rawMS(time) {
        var _a, _b, _c, _d;
        return ((_a = time.hour) !== null && _a !== void 0 ? _a : 0) * 3600000 +
            ((_b = time.minutes) !== null && _b !== void 0 ? _b : 0) * 6000 +
            ((_c = time.seconds) !== null && _c !== void 0 ? _c : 0) * 1000 +
            ((_d = time.milliseconds) !== null && _d !== void 0 ? _d : 0);
    }
    time_1.rawMS = rawMS;
})(time = exports.time || (exports.time = {}));
//# sourceMappingURL=time.js.map