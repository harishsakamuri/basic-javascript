this.table = "window table";

const clean = function(soap)
{
	console.log("cleaning " + this.table + " using "+ soap);
}
clean();

clean.call(this,"lyzol");

this.garage = 
{
	table:"garage table"/*,cleantable(){
		console.log("cleaning " + this.table);

}*/
}
//console.log(this.garage.table);

let johnsroom = {
	table:"johns table"/*,cleantable(){
		console.log("cleaning " + this.table);
	}*/
}
console.log(johnsroom.table);
//johnsroom.cleantable();
//this.garage.cleantable();
clean.call(this.garage,"  vim");
clean.call(johnsroom,"some soap");

 