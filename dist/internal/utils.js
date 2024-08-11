"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandom = exports.Crypto = exports.extractFileName = void 0;
const tslib_1 = require("tslib");
const crypto = tslib_1.__importStar(require("crypto"));
function extractFileName(filePath, removeExtension = true) {
    const urlArr = filePath.split('/');
    const fullName = urlArr[urlArr.length - 1];
    let fileName = fullName;
    if (removeExtension) {
        fileName = fullName.split('.')[0];
    }
    return fileName;
}
exports.extractFileName = extractFileName;
var Crypto;
(function (Crypto) {
    function createPasswordHash(password) {
        return crypto.createHmac('sha256', password).digest('hex');
    }
    Crypto.createPasswordHash = createPasswordHash;
    function comparePasswords(password, hash) {
        return createPasswordHash(password) == hash;
    }
    Crypto.comparePasswords = comparePasswords;
})(Crypto = exports.Crypto || (exports.Crypto = {}));
const generateRandom = () => Math.random().toString(36).substring(2, 15);
exports.generateRandom = generateRandom;
//# sourceMappingURL=utils.js.map