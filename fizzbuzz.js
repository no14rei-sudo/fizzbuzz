for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.job("FizzBuzz");
    } else if (i % 5 === 0) {
        console.job("Buzz");
    } else if (i % 3 === 0) {
        console.job("Fizz");
    } else {
        console.job(i);
    }
}
