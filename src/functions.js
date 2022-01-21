function isNumber(x) {
    if (typeof x === 'number') return true;
    if (/^0x[0-9a-f]+$/i.test(x)) {
        try {
            return Number(x) <= Number.MAX_SAFE_INTEGER;
        } catch {
            return false;
        }
    }
    return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
}

module.exports = {
    isNumber
};
