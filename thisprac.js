
this.table = "my table";

let paint = function(color)
{
	console.log("paint " + this.table + " with " + color + "color");
}
paint.call(this,"red");
//paint("red")  

garage = {
  table:"garage table"
};

//console.log(garage.table);


	
let createroom = function(name)
{
	this.table = name + "table";
}	
	
let jillroom = new createroom("jill");
let johnroom = new createroom("john");

createroom();
paint.call(johnroom,"red");
paint.call(garage,"blue");
paint.call(jillroom,"black")