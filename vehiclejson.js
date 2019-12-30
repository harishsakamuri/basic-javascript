var vehicle = function ()
{
	return{ start:function()
 {
   return "startengine";
 },
 stop:function ()
 {
   return "stop engine";
 },
 "name":"mahindra","model":"thar","milage":"12kmpl",printdetails:function()
 {
  console.log(this.name);
  console.log(this.model);
  console.log(this.milage);
  return ;
 }
  
 };
}
v1=vehicle();
console.log(v1.start());
console.log(v1.stop());
v1.printdetails();
