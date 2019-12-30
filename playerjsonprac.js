var player = function()
{
	return{
	myname:"",
	wepontype:"",
	mymedkit:"",
	mylevel:"",
	setname:function(name)
		{
			this.myname=name;
		},
		setweapontype:function(weapon)
		{
			
			if(0<weapon<5)
			{
				this.weapontype=weapon;
			}
			else
			{
				return -1;
			}
		},
		setmedkit:function(medkit)
		{
			
			if(medkit>1 && medkit<100)
			{
				this.mymedkit=medkit;
			}
			else
			{
				return -1;
			}
		},
		setlevel:function(level)
		{
			
			if(level>1 && level<6)
			{
				this.mylevel=level;
			}
			else
			{
				return -1;
			}
			
		},
		shoot:function()
		{
			console.log(this.myname + " shoot with wepon "+ this.weapontype);
		},
		health:function()
		{
			console.log("my health is at " + this.mymedkit);
		},
		level:function()
		{
			console.log("my level is at "+this.mylevel);
		}
	};
}
p1=player();
p1.setname("harish");
p1.setweapontype(4);
p1.setmedkit(90);
p1.setlevel(4);
p1.shoot();
p1.health();
p1.level();

