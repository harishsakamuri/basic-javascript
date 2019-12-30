var d = function(a,b,c)
{
  if((a > b) && (a > c))
  {
   console.log(a);
  }
  else if ((b > a) && (b > c)) 
  {
    console.log(b);
  }
  else
  {
    console.log(c);
  }
  return;
}
function callback(e)
{
	e(3,15,12);
}
callback(d);