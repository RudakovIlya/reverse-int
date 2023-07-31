module.exports = function reverse(n) {
    return +n
        .toString()
        .split("")
        .reduceRight((resultValue, value) => {
            if (isNaN(value)) {
                return resultValue;
            }
            resultValue += value;
            return resultValue;
        }, "");
};
