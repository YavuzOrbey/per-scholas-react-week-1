/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumfrence = pi * diameter
 ​
 Complete the following functions and add function param and return type annotations
 */
function getArea(radius) {
    if (radius > 0)
        return Math.PI * radius * radius;
}
function getDiameter(radius) {
    if (radius > 0)
        return 2 * radius;
}
function getCircumference(radius) {
    if (radius > 0)
        return getDiameter(radius) * Math.PI;
}
console.log("Diameter of Circle with radius = 3: " + getDiameter(3));
console.log("Circumference of Circle with radius = 3: " + getCircumference(3));
console.log("Area of Circle with radius = 3: " + getArea(3));
