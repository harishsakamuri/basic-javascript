var b = function(a,b)
{
 var sum = 0;
 for(i = 0;i < a;i=i+2)
 {
  for(j = 0;j < b;j++)
  {
   if((j%2)==1)
   {
    sum = sum+1;
	return sum;
   }
   else
   {
    sum = sum + 2;
	return sum;
   }
  }
 }
 return sum;
}
console.log(b(5,3));
console.log(b(6,2));