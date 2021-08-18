function Rectangle(a, b) {
    if (a >= 1 && b <= 100) {
        return {
            length: a,
            width: b,
            perimeter: 2 * (a + b),
            area: a * b
        };
    }
    return {};
}
console.log(Rectangle(2, 10));
