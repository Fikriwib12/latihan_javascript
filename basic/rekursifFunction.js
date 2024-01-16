// function numbering(n) {
//     if (n === 20) return
//     console.log(n)
//     numbering(n + 1)
// }

// numbering(10)


function faktorial(k) {
    console.log('k:', k);

    if (k === 0) {
        console.log('Base case reached.');
        return 1;
    }

    const result = k * faktorial(k - 1);
    console.log(`faktorial(${k}) = ${result}`);
    return result;
}

console.log(faktorial(5));
