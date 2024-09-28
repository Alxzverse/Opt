

ChartNumberPlate = function()
{
	ChartTypeModify.call(this, "Number Plate", []);
}


ChartNumberPlate.prototype = new ChartTypeModify();
ChartNumberPlate.constructor = ChartNumberPlate;

ChartNumberPlate.prototype.GetNumRows = function()
{
	return 1;
}

ChartNumberPlate.prototype.GetRowElements = function(index)
{
	return 1
}

ChartNumberPlate.prototype.GetRowScale = function(index)
{
	return 22;
	//return this.RowScaleInch() / 2.54 * 7.9; //79 mm in height at 20.5 m
}

ChartNumberPlate.prototype.GetNumImages = function() //in optotype.
{
	return 1;
}

ChartNumberPlate.prototype.GetImage = function(index) 
{
	return "NumberPlate/Numberplate2";
}

ChartNumberPlate.prototype.Modify = function(svg)
{
	var el = svg.getElementById("layer1");
	
	var mmLetterHeight= 89;
	var mmLetterWidth = 50;
	var mmGroupSpace  = 33;
	var mmLetterSpace = 11;
	
	//var letterWidth = 56.182;
	//var letterHeight = 100.316;
	
	var x = 70;
	var y = 15;
	
	for(var i = 0 ; i < 7 ; i++)
	{
		var s = "";
		
		if( i == 2 || i == 3 )
		{
			s += Math.floor(Math.random() * 9);
		}
		
		else
		{
			var e = ["A", "B", "C", "D", "E", "F", "G", "H", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
			s += e[ Math.floor( Math.random() * e.length ) ];
		}
		
		var a = document.createElementNS('http://www.w3.org/2000/svg', "image");
		a.setAttributeNS("http://www.w3.org/1999/xlink", "href", s + ".svg");
		
		a.setAttribute("x", "" + x);
		a.setAttribute("y", "" + y);
		a.setAttribute("width",  "" + mmLetterWidth);
		a.setAttribute("height", "" + mmLetterHeight);
	
		el.appendChild(a);
		
		if( i == 3 ) 
			x += mmLetterWidth + mmGroupSpace;
		
		else
			x += mmLetterWidth + mmLetterSpace;
	}
	

}

ChartNumberPlate.prototype.GetBackgroundCol = function()
{
	return "#aaaaff";
}

ChartNumberPlate.prototype.GetScaleFormatString = function(isNear)
{
	return "";
}

ChartType.Register(new ChartNumberPlate());

			
