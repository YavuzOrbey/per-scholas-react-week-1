/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
  -
 |_|
​
 */
function drawSmallPizzaSlice():string {

    return drawAnyPizzaSlice(1,1);
}
​
/**
 * Draw a length 1 width 2 pizza slice 
 * Medium - Length 1 width 2:
  
   --
  |__|
 * 
 */
​
function drawMediumPizzaSlice():string {

    return drawAnyPizzaSlice(1,2);
}
​
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
function drawLargePizzaSlice():string {
    return drawAnyPizzaSlice(2,2);
}
​
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
function drawAnyPizzaSlice(length:number, width: number):string {
    let slice ="";
    for(let j=0; j< length+1; j++){
        let line ="";
        for(let i=0; i< width+2; i++) {
            // if we're at the beginning or ending of the top portion of the pizza it's just an empty space
            if((i==0 || i==width+1) && j==0){
                line+=" "
            }
            // if we're at the top portion of the pizza it's a dash character 
            else if(j==0){
                line +="-"
            }
            //if we're at the sides we add a pipe character 
            else if(j>0 && (i==0|| i==width+1)){
                line+="|"
            }
            // if we're in the middle of the pizza it's just a blank space OR sometimes a pepperoni
            else if(j >0 && j< length ){
                let rand = Math.floor(Math.random()*10);
                if(rand < 8){
                    line+=" "
                }
                else
                    line+="."
            }
            //if we're at the bottom of the slize and not the sides create the crust
            else if(j==length && (i>0 || i< width+1)){
                line+="_"
            }
        }

        slice +=line +"\n";
    }

    return slice;
}


​let stuff: Array<{a: number}> = [{a: 3}]
console.log(drawSmallPizzaSlice());
console.log(drawMediumPizzaSlice());
console.log(drawLargePizzaSlice());
console.log(drawAnyPizzaSlice(6,5));


type pizza = "pizza"

function doThis(): false| "happy"| {a: 1, b: boolean} | {name: string, city?: string} {
    let stuff; //implicit any 
    if(1 > stuff){
        return false;
    }
    return stuff;

}




function doAnotherThing(): {a: number} {
    let stuff;
    return undefined;
}

type HiResponse = {name: string, city?: string}
function  sayHi(name:string, city?:string):HiResponse{
    if(city){
        const response = {name, city}
    }
    else{
        const response = {name} 
    }
    return response;   
}

const response = sayHi("hello", )
console.log(response);

type Animal = {
    species: string
}

type Man = {
    name: string
}

type AnimalMan = Animal & Man;