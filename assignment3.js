convertlisttoobject = function()
{
 var list = []
 var object = {name:"isro",age:35,role:"scientist"}
 for(i in object)
 {
   list.push([i,object[i]]);
 }
 console.log(list);
}
convertlisttoobject();