fromlisttoobject = function()
{
	var array = [["make","ford"],["model","mustang"],["year",1964]];
	var object = {};
	for(i in array)
	{
	object[array[i][0]]=array[i][1];
		
	}
	console.log(object);
	
}
fromlisttoobject();
