assertobjectsequal = function()
{
	var expected = {foo:5,bar:6};
	var actual = {foo:5,bar:6};
	var a = JSON.stringify(expected);
	var b = JSON.stringify(actual);
	if (a==b)
	{
		console.log("passed");
	}
	else
	{
		console.log("failure case:");
	}
}
assertobjectsequal();