transformgeekdata = function()
{
list = [];


var array = [[["firstname","vasanth"],["lastname","raja"],["age",24],["role","jswizard"]],[["firstname","sri"],["lastname","devi"],["age",28],["role","coer"]]];
 
for(i in array)
  {
	 a = {};				
     for(j in array[i])
	  {
	   a[array[i][j][0]]=array[i][j][1];  
	  }
	
	 list.push(a);
    
  }
  
  console.log(list);
}
transformgeekdata();