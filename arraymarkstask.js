marks = [11,32,44,8,70,60,80,8,9,75]
b=[];
c=[];
var a = function()
{
 for(i=0;i<marks.length;i++)
 {
  if(marks[i]<30)
  {
   b.push(marks[i]+30);
  }
  else
  {
   b.push(marks[i]);
  }
 }
 
 for(i=0;i<b.length;i++){
  if(0<b[i] && b[i]>29)
  {
	 c.push("D");
  }
  else if(30<b[i] && b[i]>59) 
  {
    c.push("C")
  }
  else if(60<b[i] && b[i]>79)
  {
	 c.push("B");
  }
  else
  {
	 c.push("A")
  }
  }
 console.log(b)
 console.log(c)

}

a();
