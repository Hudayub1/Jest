function sum(n1, n2) {
    return n1 + n2
}

function capitalize(str) {
    const splitChar = str.split("");
    splitChar[0] = splitChar[0].toUpperCase();
   
    return splitChar.join("");
}

function revStr(str) {
    return str.split("").reverse().join("")
}

class Calculator { 
    static sum(n1, n2) {
        return n1 + n2
    }

    static subtract(n1, n2) {
        return n1 - n2
    }

    static multiply(n1, n2) {
        return n1 * n2
    }

    static divide(n1, n2) {
        return n1 / n2
    }
}

class AnalyzeArr {
    constructor(arr) {
        this.arr = arr;
    }
    average(arr) {
        const sum = this.arr.reduce((acc, curr) => {
            return acc + curr;
        });
        const length = this.arr.length

        return sum / length;
    }

    min(arr) {
        return Math.min(...this.arr)
    }

    max(arr) {
        return Math.max(...this.arr)
    }

    length(arr) {
        return this.arr.length
    }

    AnalyzeArrWrapper(arr) {
    const analyzer = new AnalyzeArr();
        return {
            average: analyzer.average(arr),
            min: analyzer.min(arr),
            max: analyzer.max(arr),
            length: analyzer.length(arr),
        };
    }
    toObject() {
        return {
            average: this.average(),
            min: this.min(),
            max: this.max(),
            length: this.length()
        };
    }
}

// 1
test('takes string and return the first letter to Capital', () => {
    expect(capitalize('something')).toBe('Something');
});

// 2
test('revStr', () => {
    expect(revStr('rat')).toBe('tar');
})

// 3
test('Calculator', () => {
    expect(Calculator.subtract(5,1)).toBe(4);
    expect(Calculator.divide(10,2)).toBe(5);
    expect(Calculator.multiply(10,2)).toBe(20);
    expect(Calculator.sum(2,2)).toBe(4);
});

// 4
// test('caesarCipher', () => {
//     expect(subtract(5,1)).toBe(4);
//     expect(divide(10,2)).toBe(5);
//     expect(multiply(10,2)).toBe(20);
//     expect(sum(2,2)).toBe(4);
// });

// 5
test('analyzeArr', () => {
    const object = new AnalyzeArr([1,8,3,4,2,6]).toObject();

    expect(object).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});