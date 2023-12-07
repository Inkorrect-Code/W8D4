Function.prototype.curry = function (numArgs) {
    const numbers = [];

    let that = this;

    return function _curriedAdd(num) {
        numbers.push(num);

        if (numbers.length === numArgs) {
            return that.apply(that, numbers)

        } else {
            return _curriedAdd;
        }
    }
};

let sum = function (arg1, arg2, arg3, arg4) {
    return arg1 + arg2 + arg3 + arg4;
}

sum = sum.curry(4);

console.log(sum(5)(30)(20)(1));