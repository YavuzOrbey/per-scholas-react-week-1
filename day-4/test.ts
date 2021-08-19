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


const recentWeather: Array<boolean> = [true,false,false, true,true,false,false,false]
const recentSunnyWeather  = recentWeather.filter((element) => element==true)
const recentBadWeather = recentWeather.filter((element) => element==false)
console.log(recentSunnyWeather.length);
console.log(recentBadWeather.length);
