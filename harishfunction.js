var a = function()
{
     let a=20;
	 if (a==20)
	 {
	     return a;
		 console.log(a);
	 }
	 else if(a==30)
	 {
	     console.log(a);
		 return a;
	 }
}	
a() 
var b = a()
console.log(b);
