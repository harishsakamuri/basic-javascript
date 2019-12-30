var b = function(a,b)
{
  var sum = 0;
  for(i = 0;i < a; i = i+2)
  {
    if((b%2)==0)
	{
	  return sum;
	  sum = sum+i
    }
	else
	{
	  sum = sum + i + 2;
	}
   }
     return sum;
}
console.log(b(5,3));
console.log(b(6,2));	 
