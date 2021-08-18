/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
  -
 |_|
 ​
 */
function drawSmallPizzaSlice() {
    return drawAnyPizzaSlice(1, 1);
}
/**
 * Draw a length 1 width 2 pizza slice
 * Medium - Length 1 width 2:
  
   --
  |__|
 *
 */
function drawMediumPizzaSlice() {
    return drawAnyPizzaSlice(1, 2);
}
/**
 *
 * Draws a length 2 width 2 pizza slice
 * @returns {string}
 * Length 2 width 2:
  
   --
  | .|
  |__|
 ​
 */
function drawLargePizzaSlice() {
    return drawAnyPizzaSlice(2, 2);
}
/**
 * @param {string} sliceSize
 *                 size of slice
 * @return {string}
 *         Returns a string which is a "drawing" of the slice. Examples
 *
 * Small - Length 1 width 1:
   -
  |_|
 ​
 *
 * Medium - Length 1 width 2:
  
   --
  |__|
 *
 ​
 *
 * Large - Length 2 width 2:
 *
  
   --
  | .|
  |__|
 ​
 */
function drawAnyPizzaSlice(length, width) {
    var slice = "";
    for (var j = 0; j < length + 1; j++) {
        var line = "";
        for (var i = 0; i < width + 2; i++) {
            // if we're at the beginning or ending of the top portion of the pizza it's just an empty space
            if ((i == 0 || i == width + 1) && j == 0) {
                line += " ";
            }
            // if we're at the top portion of the pizza it's a dash character 
            else if (j == 0) {
                line += "-";
            }
            //if we're at the sides we add a pipe character 
            else if (j > 0 && (i == 0 || i == width + 1)) {
                line += "|";
            }
            // if we're in the middle of the pizza it's just a blank space OR sometimes a pepperoni
            else if (j > 0 && j < length) {
                var rand = Math.floor(Math.random() * 10);
                if (rand < 8) {
                    line += " ";
                }
                else
                    line += ".";
            }
            //if we're at the bottom of the slize and not the sides create the crust
            else if (j == length && (i > 0 || i < width + 1)) {
                line += "_";
            }
        }
        slice += line + "\n";
    }
    return slice;
}
console.log(drawSmallPizzaSlice());
console.log(drawMediumPizzaSlice());
console.log(drawLargePizzaSlice());
console.log(drawAnyPizzaSlice(6, 5));
