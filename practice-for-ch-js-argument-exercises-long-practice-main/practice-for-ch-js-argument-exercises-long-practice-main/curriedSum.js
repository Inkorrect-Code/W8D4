function curriedSum(numArgs) {
    const numbers = [];

    return function _curriedAdd(num) {
        numbers.push(num);

        if (numbers.length === numArgs){
            return (numbers.reduce((acc, el) => acc + el)); //acts like inject

        } else {
            return _curriedAdd;
        }
    }
};

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1));

