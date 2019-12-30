var myfunc = function(a)
{
if(a)
{
	console.log(a+a);
	return(a*a);
	console.log(a*a);
}
else
{
	console.log("inelse");
	return -1;
}
	console.log("functionended");
	return -1;

}
console.log(myfunc(-4));