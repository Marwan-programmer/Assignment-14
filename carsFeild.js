let cars="Prius,2017,red,automatic,y,y,y,n,n,y,10000#Ionic,2020,blue,automatic,y,y,y,y,y,y,13000#Audi,2013,gray,manual,y,y,n,n,n,n,7500#Golf,1995,black,manual,n,n,n,n,n,n,2100#Kia,2007,white,automatic,n,y,n,n,n,n,5300#Mercedes,1998,silver,automatic,y,y,y,n,n,n,8600";


///takes the string in data.txt and converts it to an array of car objects 
function carsFeild(cars){
let car=cars.split("#");
return car.map(eachCar=>{
  let feild=eachCar.split(",");
  return {
		type:feild[0],
		model: feild[1],
		color:feild[2],
		transmission:feild[3],
		features:{ac:feild[4],
      "electric windows":feild[5],
    "electric mirros":feild[6],
    sunroof:feild[7],
    "auto park":feild[8],
    "cruise control":feild[9],
    price:feild[10]}
    
	}
  
 })

};


//////for each car object, computes the total customs that need to be added to the base price based on the customs rules

function TotalPrice(cars){
 return cars.map(car=>{
let pricemain =car.features.price;
  let TotalPrice=0;


if(car.model>=2015){
   TotalPrice+=10;
}

if(car.model>=2010 && cars[0].model<=2014){
   TotalPrice +=8;

}



if(car.model>=2005 && cars[0].model<=2009){
  TotalPrice+=6;

}

if(car.model>=2010 && cars[0].model<=2014){
  TotalPrice+=8;

}


if(car.model>=2000 && cars[0].model<=2004){
  TotalPrice+=8;

}

if(car.model>=1999){
  TotalPrice+=2;

}


if(car.transmission==="automatic"){
  TotalPrice+=3;

}
if(car.features.ac==="y"){
  TotalPrice+=5;

}
if(car.features["electric windows"]==="y"){
  TotalPrice+=8;

}
if(car.features.sunroof==="y"){
  TotalPrice+=7;

}
if(car.features["electric mirros"]==="manual"){
  TotalPrice+=3;

}

if(car.features.sunroof==="y"){
  TotalPrice+=7;
}
if(car.features["auto park"]==="y"){
  TotalPrice+=5;}

if(car.features["cruise control"]==="y"){
  TotalPrice+=4;}



car.TotalPrice=+((TotalPrice*pricemain)/100)+ +pricemain ;

return car;

})
}



////displays the information of all cars sorted based on the total price
function sorted(cars){
return(cars.sort((a,b) => b.TotalPrice-a.TotalPrice))
}




//returns a formatted string

function formattedString(cars){
return cars.map(eachCar=>{
 return `Type: ${eachCar.type} \n`+
 `Model: ${eachCar.model}\n`+
 `Color: ${eachCar.color}\n`+
 `Transmission: ${eachCar.transmission}\n`+
 `features:\n`+
 `  AC: ${eachCar.features.ac=="y"?"yes":"NO"}\n`+
 `  Electric Windows: ${eachCar.features["electric windows"]=="y"?"yes":"NO"}\n`+
 `  Electric Mirrors: ${eachCar.features["electric mirros"]=="y"?"yes":"NO"}\n`	+
 `  Sunroof: ${eachCar.features.sunroof=="y"?"yes":"NO"}\n`+
 `  Auto-park: ${eachCar.features["auto park"]=="y"?"yes":"NO"}\n`+
 `  Cruise Control: ${eachCar.features["cruise control"]=="y"?"yes":"NO"}\n`+
 `  Total-Price: ${eachCar.TotalPrice}\n`






 }).join("\n")  

};

console.log(formattedString(sorted(TotalPrice(carsFeild(cars)))))


