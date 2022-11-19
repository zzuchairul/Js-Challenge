const deepEqueal = (x, y) => {

    if(typeof x !== 'object' && typeof y !== 'object') {
        const xNan = typeof x === 'number' && isNaN(x);
        const yNan = typeof y === 'number' && isNaN(y);
        
        if(xNan && yNan) return true;

        return x === y;
    }

    if(typeof x !== typeof y) return false;
    if(x === null && y === null) return true;
    if(x === null || y === null) return true;
    if(x === y) return true;

    if(Array.isArray(x) && Array.isArray(y)) {
        if(x.length !== y.length) return false;

        for(let i = 0; i < x.length; i++)
            if(!deepEqueal(x[i], y[i])) return false;
        
        return true;
    }

    if(Array.isArray(x) || Array.isArray(y)) return false;

    const xKey = Object.keys(x);
    const yKey = Object.keys(y);
    
    if(!deepEqueal(xKey, yKey)) return false;
    for(let j = 0; j < xKey.length; j++) {
        const key = xKey[j];
        if(!deepEqueal(x[key], y[key])) return false;
    }

    return true;
};



console.log(' ');
console.log('THIS IS TRUE');
console.log(deepEqueal(NaN, NaN));
console.log(deepEqueal(1, 1));
console.log(deepEqueal('asdf', 'asdf'));
console.log(deepEqueal([], []));
console.log(deepEqueal([1, 2, 3], [1, 2, 3]));
console.log(deepEqueal([1, [2, 3]], [1, [2, 3]]));
console.log(deepEqueal([1, [2, 3], [[]]], [1, [2, 3], [[]]]));
console.log(deepEqueal({a:1,b:2,c:3, d:{e:4,f:5}}, {a:1,b:2,c:3, d:{e:4,f:5}}))
console.log(deepEqueal(null, null));

console.log(' ');
console.log('THIS IS FALSE');
console.log(deepEqueal(1, 2));
console.log(deepEqueal('asdf', 'holana'));
console.log(deepEqueal([], 1));
console.log(deepEqueal([], [1]));
console.log(deepEqueal([2, 123], [123, 2]));
console.log(deepEqueal(null, 123));
console.log(deepEqueal(null, undefined));
console.log(deepEqueal({a: undefined, b:1}, {b:1, c:2}));
console.log(deepEqueal({a:1,b:2,c:3, d:{e:4,f:5}, g:undefined}, {a:1,b:2,c:3, d:{e:4,f:5}}))