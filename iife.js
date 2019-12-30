var a = 0;
(function f1()
{
 a++	
 console.log("stopme");
 if(a==5)
 return 0;
 f1();
}
)();