let Person = function(name,yearofbirth,job)
{
  this.name = name;
  this.yearofbirth = yearofbirth;
  this.job = job;
};

Person.prototype.calculateage = function()
  {
	  console.log(2019-this.yearofbirth);
  }

let john = new Person("john","1995","teacher");
let jane = new Person("name","1995","it");
john.calculateage();
jane.calculateage();