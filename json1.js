var a = function()
{
  return {"name":"harish","age":"24","dept":"ece",myfunc:function(){
  console.log("hello");
  console.log(this.name);
  console.log(this.age);
  }
 }
}
a1 = a();
//a2 =a();
a1.myfunc();
